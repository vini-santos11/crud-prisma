import { TodoDTO } from '../DTOs/TodoDTO';
import { ITodoRepository } from '../interfaces/repositories/ITodoRepository';
import { ITodoService } from '../interfaces/services/ITodoService';


export class TodoService implements ITodoService {
    constructor(private todoRepository: ITodoRepository) {
        this.todoRepository = todoRepository;
    }

    getAll() : TodoDTO[] {
       var result = this.todoRepository.getAll();
       
       // transform result to DTO
        return result.map((todo) => new TodoDTO (todo.title, todo.description));
    }
}

