import { Todo } from "../entities/todo";
import { ITodoRepository } from "../interfaces/repositories/ITodoRepository";
import { getTodos } from "../database/PrismaClient";

export class TodoRepository implements ITodoRepository {
    public static todoRepository: TodoRepository;
    
    private constructor() {}

    public static getInstance() {
        if (!TodoRepository.todoRepository) {
            TodoRepository.todoRepository = new TodoRepository();
        }

        return TodoRepository.todoRepository;
    }

    public async getAll(): Promise<Todo[]> {
        return await getTodos()
    }
}