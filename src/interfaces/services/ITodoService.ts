import { TodoDTO } from "../../DTOs/TodoDTO";

export interface ITodoService {
    getAll(): Promise<TodoDTO[]>;
    // getById(id: string): Promise<TodoDTO | undefined>;
    create(todo: TodoDTO): Promise<TodoDTO>;
    // update(id: string, todo: TodoDTO): Promise<TodoDTO | undefined>;
    // delete(id: string): Promise<void>;
}