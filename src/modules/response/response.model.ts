// src/modules/responses/response.model.ts
import { ObjectId } from "mongodb";

export interface PqrsResponse {
    _id?: ObjectId;
    pqrsId: ObjectId;      // ID de la PQRS que estamos respondiendo
    usuarioId: ObjectId;   // ID del Admin que responde
    mensaje: string;       // El texto de la solución
    createdAt: Date;
}