import express, { Express, Request , Response} from 'express';
class JSONResponse {
    constructor() { }
    static success(req: Request, res: Response, message:string, data:object) {
        res.status(200).json({
            success: true,
            message: message || 'success',
            data: data,
        });
    }
    static serverError(req: Request, res: Response, message:string, data:object) {
        res.status(500).json({
            code: 500,
            message: message || 'internal server error',
            data: data,
        });
    }
}

export default JSONResponse;