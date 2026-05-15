import { Router } from "express";
import { UsersController } from "./users.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

const usersController = new UsersController();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get(
    "/",
    authMiddleware,
    usersController.findallUsers
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Usuarios]
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Usuario encontrado
 */
router.get(
    "/:id",
    authMiddleware,
    usersController.findallUsers
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Usuarios]
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *
 *           example:
 *             names: Pepito Actualizado
 *             sede: Sede Norte
 *             programa: Ingeniería de Software
 *
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 */
router.put(
    "/:id",
    authMiddleware,
    usersController.update
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Usuarios]
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 */
router.delete(
    "/:id",
    authMiddleware,
    usersController.delete
);

export default router;