import {Router} from 'express';
import { authController }    from './auth.controller.js';


const router = Router();

const authcontroller = new authController();


router.post('/register', authcontroller.register);
router.get('/login', authcontroller.login);

export default router;