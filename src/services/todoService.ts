import { TodoDTO } from '../DTOs/TodoDTO';
import { Todo } from '../entities/todo';
import { ITodoRepository } from '../interfaces/repositories/ITodoRepository';
import { ITodoService } from '../interfaces/services/ITodoService';


export class TodoService implements ITodoService {
    constructor(private todoRepository: ITodoRepository) {
        this.todoRepository = todoRepository;
    }

    async getAll(): Promise<TodoDTO[]> {
       var result = await this.todoRepository.getAll();
       
       // transform result to DTO
        return result.map((todo) => new TodoDTO(todo));
    }

    async getById(id: string): Promise<TodoDTO | null> {
        var result = await this.todoRepository.getById(id);
        
        if (!result) {
            return null;
        }

        return new TodoDTO(result);
    }

    async create(todo: Todo): Promise<TodoDTO> {
        var result = await this.todoRepository.create(todo);

        return new TodoDTO(result);
    }

    async update(todo: Todo): Promise<TodoDTO | null> {
        var result = await this.todoRepository.update(todo);

        if (!result) {
            return null;
        }

        return new TodoDTO(result);
    }

    async delete(id: string): Promise<void> {
        await this.todoRepository.delete(id);
    }

    async markAsDone(id: string): Promise<TodoDTO | null> {
        var result = await this.todoRepository.markAsDone(id);

        if (!result) {
            return null;
        }

        return new TodoDTO(result);
    }

    async markAsUndone(id: string): Promise<TodoDTO | null> {
        var result = await this.todoRepository.markAsUndone(id);

        if (!result) {
            return null;
        }

        return new TodoDTO(result);
    }
}

