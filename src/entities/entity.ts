import { v4 as uuid } from 'uuid';

export class BaseEntity {
    public id: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor() {
        this.id = uuid();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
