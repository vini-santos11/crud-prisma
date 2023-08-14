import { TodoDTO } from "../../DTOs/TodoDTO";

export interface ITodoService {
    getAll(): Promise<TodoDTO[]>;
    getById(id: string): Promise<TodoDTO | null>;
    create(todo: TodoDTO): Promise<TodoDTO>;
    update(todo: TodoDTO): Promise<TodoDTO | null>;
    delete(id: string): Promise<void>;
}