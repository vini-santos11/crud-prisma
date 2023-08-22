import { Response } from "express";
import { GenericResultDTO } from "../DTOs/GenericResultDTO";

interface IBaseController {
    sendResponse<T>(response: Response, result: GenericResultDTO<T>): Response;
}

export class BaseController implements IBaseController {
    public sendResponse<T>(response: Response, result: GenericResultDTO<T>) {
        var dto = new GenericResultDTO<T>(result.status, result.message, result.data);
        return response.status(result.status).json(dto);
    }
}
