// src/modules/responses/response.routes.ts
import { Router } from "express";
import { ResponseController } from "./response.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();
const controller = new ResponseController();

router.post("/", authMiddleware, controller.create);

export default router;