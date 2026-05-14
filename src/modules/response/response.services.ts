// src/modules/responses/response.service.ts
import { ResponseRepository } from "./response.repository.js";
import { ObjectId } from "mongodb";

export class ResponseService {
    private repository = new ResponseRepository();

    async createResponse(data: any, adminId: string) {
        if (!data.pqrsId || !data.mensaje) {
            throw new Error("El ID de la PQRS y el mensaje son obligatorios");
        }

        const nuevaRespuesta = {
            pqrsId: new ObjectId(data.pqrsId),
            usuarioId: new ObjectId(adminId),
            mensaje: data.mensaje,
            createdAt: new Date()
        };

        // 1. Guardamos la respuesta
        const result = await this.repository.save(nuevaRespuesta);

        // 2. CONEXIÓN: Cambiamos el estado de la PQRS a resuelta
        await this.repository.markPqrsAsResolved(data.pqrsId);

        return result;
    }
}