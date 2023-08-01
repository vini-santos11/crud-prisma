import { Router } from "express";
import { TodoController } from "../controllers/todoController";
import { TodoService } from "../services/todoService";
import { TodoRepository } from "../repositories/todoRepository";

const router = Router();

const todoRepository = TodoRepository.getInstance();

const todoController = new TodoController(new TodoService(todoRepository));

router.get("/", (request, response) => {
    todoController.getAll(request, response);
});

export default router;
