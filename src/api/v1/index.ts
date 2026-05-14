import express from 'express';
import { Router } from 'express';
import  usersRouter  from '../../modules/users/users.routes.js';
import  authRouter  from '../../modules/auth/auth.routes.js';
import { app } from '../../app.js';
import  pqrs from '../../modules/pqrs/pqrs.routes.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import categoryRoutes from "../../modules/category/category.routes.js";
import responseRoutes from "../../modules/response/response.routes.js";


const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/pqrs',authMiddleware, pqrs);
router.use('/categories', categoryRoutes);
router.use('/responses', responseRoutes);
export default router;