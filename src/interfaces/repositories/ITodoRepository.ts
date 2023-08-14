import { Todo } from "../../entities/todo";

export interface ITodoRepository {
    getAll(): Promise<Todo[]>;
    getById(id: string): Promise<Todo | null>;
    create(todo: Todo): Promise<Todo>;
    update(todo: Todo): Promise<Todo | null>;
    delete(id: string): Promise<void>;
    markAsDone(id: string): Promise<Todo | null>;
    markAsUndone(id: string): Promise<Todo | null>;
}
