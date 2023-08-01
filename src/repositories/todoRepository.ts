import { Todo } from "../entities/todo";
import { v4 as uuidv4 } from 'uuid';
import { ITodoRepository } from "../interfaces/repositories/ITodoRepository";

export class TodoRepository implements ITodoRepository {
    public static todoRepository: TodoRepository;
    
    private constructor() {}

    public static getInstance() {
        if (!TodoRepository.todoRepository) {
            TodoRepository.todoRepository = new TodoRepository();
        }

        return TodoRepository.todoRepository;
    }

    public getAll(): Todo[] {
        return [
            {
                id: uuidv4(),
                title: 'Todo 1',
                description: 'Qualquer coisa',
                isDone: false,
                updatedAt: new Date(),
                createdAt: new Date()
            },
            {
                id: uuidv4(),
                title: 'Todo 2',
                description: 'Qualquer coisa', 
                isDone: false,
                updatedAt: new Date(),
                createdAt: new Date()
            },
       ]
    }
}