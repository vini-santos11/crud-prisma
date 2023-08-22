import { Request, Response } from "express";
import { ITodoService } from "../interfaces/services/ITodoService";
import { BaseController } from "./baseController";
import { GenericResultDTO } from '../DTOs/GenericResultDTO';
import { TodoDTO } from '../DTOs/TodoDTO';

export class TodoController extends BaseController {
    constructor(private todoService: ITodoService) {
        super()
    }

    async getAll(request: Request, response: Response) {
        var data = await this.todoService.getAll();

        var result = {
            status: 200,
            message: 'Todos found',
            data
        }
        
        if (data.length === 0) {
            result.status = 200;
            result.message = 'There are no todos';
        }

        return this.sendResponse(response, result)
    }

    async getById(request: Request, response: Response) {
        const { id } = request.params;

        const data = await this.todoService.getById(id);

        var result = {
            status: 200,
            message: 'Todos found',
            data
        }
        
        if (!data) {
            result.status = 404;
            result.message = 'Todo not found';
        }

        return this.sendResponse(response, result)
    }

    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        var result: GenericResultDTO<TodoDTO> = {
            status: 201,
            message: 'Todo created',
            data: null
        }

        if (!title) { 
          result.status = 400;
          result.message = 'Title is required';   
        } else {
            var data = await this.todoService.create({
                title, description
            });
            
            if (!data) {
                result.status = 503;
                result.message = 'Cannot create todo';
            } else
                result.data = data;
        }
        
        return this.sendResponse(response, result)
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
