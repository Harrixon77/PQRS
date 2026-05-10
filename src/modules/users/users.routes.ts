import {Router} from "express";
import { UsersController } from "./users.controller.js";
import { createUserSchema } from "./users.schema.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { authMiddleware} from "../../middlewares/auth.middleware.js";

const router = Router();
const usersController = new UsersController();


router.post('/register',validate(createUserSchema), usersController.register);
router.get('/',authMiddleware, usersController.findallUsers);

export default router;
