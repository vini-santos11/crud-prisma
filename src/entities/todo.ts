import { BaseEntity } from "./entity";

export class Todo extends BaseEntity {
    public title: string;
    public description: string | null;
    public isDone: boolean;

    constructor(title: string, description: string, isDone: boolean) {
        super();
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }
}

