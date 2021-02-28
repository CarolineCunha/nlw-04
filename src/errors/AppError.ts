
export class AppError{
    message: string;
    statusCodade: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCodade = statusCode;
    }
}