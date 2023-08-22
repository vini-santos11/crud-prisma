export class GenericResultDTO<T> {
    public status: number;
    public message: string;
    public length?: number;
    public data: T | T[] | null;

    constructor(status: number, message: string, data: T | T[] | null){
        this.status = status;
        this.message = message;
        if (Array.isArray(data))
            this.length = data.length;
        this.data = data;
    }
}
