import { Todo } from "../../entities/todo";

export interface ITodoRepository {
    getAll(): Todo[];
}