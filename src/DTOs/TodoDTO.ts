import {v4 as uuidv4} from 'uuid';

export class TodoDTO {
    public title: string;
    public description: string | undefined | null;
    public isDone: boolean;
    public id: string;
    public updatedAt: Date;
    public createdAt: Date;

    constructor(title: string, description: string | undefined | null, isDone: boolean) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.updatedAt = new Date(),
        this.createdAt = new Date()
    }
}
