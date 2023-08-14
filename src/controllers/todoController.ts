import { Request, Response } from "express";
import { ITodoService } from "../interfaces/services/ITodoService";

export class TodoController {
    constructor(private todoService: ITodoService) {}

    async getAll(request: Request, response: Response) {
        return response.json(await this.todoService.getAll());
    }

    async getById(request: Request, response: Response) {
        const { id } = request.params;

        const todo = await this.todoService.getById(id);

        if (!todo) {
            return response.status(404).json({
                message: 'Todo not found'
            });
        }

        return response.json(todo);
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

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { title, description } = request.body;

        if (!title) {
            return response.status(400).json({
                message: 'Title is required'
            });
        }

        return response.json(await this.todoService.update({
            id, title, description
        }));
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await this.todoService.delete(id);

        return response.status(204).send();
    }

    async markAsDone(request: Request, response: Response) {
        const { id } = request.params;

        const todo = await this.todoService.markAsDone(id);

        if (!todo) {
            return response.status(404).json({
                message: 'Todo not found'
            });
        }

        return response.json(todo);
    }

    async markAsUndone(request: Request, response: Response) {
        const { id } = request.params;

        const todo = await this.todoService.markAsUndone(id);

        if (!todo) {
            return response.status(404).json({
                message: 'Todo not found'
            });
        }

        return response.json(todo);
    }
}
