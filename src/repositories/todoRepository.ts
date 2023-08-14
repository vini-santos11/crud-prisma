import { Todo } from "../entities/todo";
import { ITodoRepository } from "../interfaces/repositories/ITodoRepository";
import { prismaClient } from "../database/prismaClient";

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
        return await prismaClient.todo.findMany();
    }

    public async getById(id: string): Promise<Todo | null> {
        return await prismaClient.todo.findUnique({
            where: {
                id
            }
        });
    }

    public async create(todo: Todo): Promise<Todo> {
        return await prismaClient.todo.create({
            data: todo
        })
    }

    public async update(todo: Todo): Promise<Todo | null> {
        return await prismaClient.todo.update({
            where: {
                id: todo.id
            },
            data: todo
        });
    }

    public async delete(id: string): Promise<void> {
        await prismaClient.todo.delete({
            where: {
                id
            }
        });
    }
}
