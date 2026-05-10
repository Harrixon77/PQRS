import { type  Request, type Response } from "express";    
import { UsersService } from "./users.service.js";

export class UsersController {
    private usersService = new UsersService();

register = async (req: Request, res: Response) => {

    const result =await this.usersService.register(req.body);
res.status(201).json({result});
}
findallUsers = async (req: Request, res: Response) => {
    const result =await this.usersService.findallUsers();
res.status(200).json({result});

}
}
