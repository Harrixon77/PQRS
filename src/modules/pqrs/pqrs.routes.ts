import { Router } from "express";

import {
  CreatePqrsController,
  GetAllPqrsController,
  GetPqrsByIdController,
  UpdatePqrsController,
  DisablePqrsController
} from "./pqrs.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: PQRS
 *   description: Gestión de PQRS
 */

/**
 * @swagger
 * /pqrs:
 *   post:
 *     summary: Crear una nueva PQRS
 *     tags: [PQRS]
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePQRS'
 *
 *           example:
 *             titulo: Falla en el internet
 *             descripcion: No hay wifi en la biblioteca
 *             tipo: queja
 *             correoAnonimo: estudiante_anonimo@gmail.com
 *             anonimo: true
 *
 *     responses:
 *       201:
 *         description: PQRS creada exitosamente
 *
 *       400:
 *         description: Datos inválidos
 */
router.post("/", CreatePqrsController);

/**
 * @swagger
 * /pqrs:
 *   get:
 *     summary: Obtener todas las PQRS
 *     tags: [PQRS]
 *
 *     responses:
 *       200:
 *         description: Lista de PQRS
 */
router.get("/", GetAllPqrsController);

/**
 * @swagger
 * /pqrs/{id}:
 *   get:
 *     summary: Obtener una PQRS por ID
 *     tags: [PQRS]
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
 *         description: PQRS encontrada
 *
 *       404:
 *         description: PQRS no encontrada
 */
router.get("/:id", GetPqrsByIdController);

/**
 * @swagger
 * /pqrs/{id}:
 *   patch:
 *     summary: Actualizar una PQRS
 *     tags: [PQRS]
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
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePQRS'
 *
 *     responses:
 *       200:
 *         description: PQRS actualizada
 *
 *       404:
 *         description: PQRS no encontrada
 */
router.patch("/:id", UpdatePqrsController);

/**
 * @swagger
 * /pqrs/{id}:
 *   delete:
 *     summary: Deshabilitar una PQRS
 *     tags: [PQRS]
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
 *         description: PQRS deshabilitada
 *
 *       404:
 *         description: PQRS no encontrada
 */
router.delete("/:id", DisablePqrsController);

export default router;