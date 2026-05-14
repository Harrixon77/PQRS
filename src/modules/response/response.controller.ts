// src/modules/responses/response.controller.ts
import {type Request, type Response } from "express";
import { ResponseService } from "./response.services.js";

export class ResponseController {
    private service = new ResponseService();

    create = async (req: any, res: Response) => {
        try {
            // El adminId viene del token (sub)
            const result = await this.service.createResponse(req.body, req.user.sub);
            res.status(201).json({
                message: "Respuesta enviada y PQRS marcada como resuelta",
                data: result
            });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}