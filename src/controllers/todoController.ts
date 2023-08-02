import { Request, Response } from "express";
import { ITodoService } from "../interfaces/services/ITodoService";

export class TodoController {
    constructor(private todoService: ITodoService) {}

    async getAll(request: Request, response: Response) {
        return response.json(await this.todoService.getAll());
    }
}
