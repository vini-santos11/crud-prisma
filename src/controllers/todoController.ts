import { Request, Response } from "express";
import { ITodoService } from "../interfaces/services/ITodoService";

export class TodoController {
    constructor(private todoService: ITodoService) {
        this.todoService = todoService;
    }

    getAll(request: Request, response: Response) {
        return response.json(this.todoService.getAll());
    }
}
