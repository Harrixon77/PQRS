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

update = async (req: Request, res: Response) => {
    try {
        const id  = req.params.id as string;
        const result = await this.usersService.update(id, req.body);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

delete = async (req: Request, res: Response) => {
    try {
        const id  = req.params.id as string;
        const result = await this.usersService.delete(id);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}
}
