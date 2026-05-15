import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();

const controller = new authController();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticación de usuarios
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *
 *           example:
 *             names: Juan David
 *             correoInstitucional: juan1234@itc.edu.co
 *             sede: Medellín
 *             programa: Ingeniería de Sistemas
 *             password: "123456"
 *             role: student
 *
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 */
router.post("/register", controller.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *
 *           example:
 *             correoInstitucional: juan1234@itc.edu.co
 *             password: "123456"
 *
 *     responses:
 *       200:
 *         description: Login exitoso
 *
 *         content:
 *           application/json:
 *             example:
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI...
 *
 *       401:
 *         description: Credenciales inválidas
 */
router.post("/login", controller.login);

export default router;