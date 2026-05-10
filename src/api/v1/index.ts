import express from 'express';
import { Router } from 'express';
import  usersRouter  from '../../modules/users/users.routes.js';
import  authRouter  from '../../modules/auth/auth.routes.js';
import { app } from '../../app.js';
import  pqrs from '../../modules/pqrs/pqrs.routes.js';




const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/pqrs', pqrs);

export default router;