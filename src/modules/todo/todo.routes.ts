import {Router} from "express";
import { ToDoController } from "./todo.controller.js";
import { createToDoSchema } from "./todo.schema.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { authMiddleware} from "../../middlewares/auth.middleware.js";

const router = Router();
const todoController = new ToDoController();


router.post('/addtodo',validate(createToDoSchema),authMiddleware, todoController.addToDo);
router.get('/dos',authMiddleware, todoController.findallToDos);

export default router;
