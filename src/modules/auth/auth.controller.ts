import { type Request, type Response , type NextFunction } from "express";
import { authService } from "./auth.service.js";


export class authController {
    private authService = new  authService;


    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error)
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.login(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error)
}
    }
}
