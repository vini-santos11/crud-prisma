import { Router, Request, Response } from "express";
import { TodoRepository } from "../repositories/todoRepository";
import { TodoController } from "../controllers/todoController";
import { TodoService } from "../services/todoService";

const todoRoutes = Router();

const todoRepository = TodoRepository.getInstance();

const todoController = new TodoController(new TodoService(todoRepository));

todoRoutes.get("/", (request: Request, response: Response) => todoController.getAll(request, response));

export { todoRoutes }