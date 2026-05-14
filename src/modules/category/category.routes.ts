// src/modules/categories/category.routes.ts
import { Router } from "express";
import { CategoryController } from "./category.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();
const controller = new CategoryController();


router.get("/", controller.getAll);


router.post("/", authMiddleware, controller.create);

export default router;