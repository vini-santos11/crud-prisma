import { Request, Response } from "express";
import { ITodoService } from "../interfaces/services/ITodoService";

export class TodoController {
    constructor(private todoService: ITodoService) {}

    async getAll(request: Request, response: Response) {
        return response.json(await this.todoService.getAll());
    }

    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        if (!title) {
            return response.status(400).json({
                message: 'Title is required'
            });
        }

        return response.status(201).json(await this.todoService.create({
            title, description
        }));
    }
}
