// src/modules/responses/response.repository.ts
import { getDb } from "../../config/database.js";
import { ObjectId } from "mongodb";

export class ResponseRepository {
    private responses() { return getDb().collection('responses'); }
    private pqrs() { return getDb().collection('pqrs'); }

    async save(data: any) {
        return await this.responses().insertOne(data);
    }

    // ¡ESTA ES LA CONEXIÓN! Actualiza la PQRS automáticamente
    async markPqrsAsResolved(pqrsId: string) {
        return await this.pqrs().updateOne(
            { _id: new ObjectId(pqrsId) },
            { $set: { estado: "resuelta", updatedAt: new Date() } }
        );
    }
}