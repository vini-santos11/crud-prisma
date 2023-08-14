type Todo = {
    id: string,
    title: string,
    description: string | undefined | null,
    isDone: boolean,
    updatedAt: Date,
    createdAt: Date
}

export class TodoDTO {
    public id?: string;
    public title: string;
    public description: string | undefined | null;
    public isDone?: boolean;
    public updatedAt?: Date;
    public createdAt?: Date;

    constructor(todo: Todo){
        this.id = todo.id
        this.title = todo.title;
        this.description = todo.description;
        this.isDone = todo.isDone;
        this.updatedAt = todo.updatedAt,
        this.createdAt = todo.createdAt
    }
}
