import { type  Request, type Response } from "express";    
import { ToDoService } from "./todo.service.js";

export class ToDoController {
    private ToDoService = new ToDoService();

addToDo = async (req: Request, res: Response) => {

    const result =await this.ToDoService.addToDo(req.body);
res.status(201).json({result});
}
findallToDos = async (req: Request, res: Response) => {
    const result =await this.ToDoService.findallToDos();
res.status(200).json({result});

}
}
