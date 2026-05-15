import { th } from "zod/locales";
import { ObjectId } from 'mongodb';
import { getDb } from "../../config/database.js";


export class UsersRepository {
    private collection(){
        return getDb().collection('users');
    }

    async create (data: any){
        const result = await this.collection().insertOne(data);
        return {result: result.insertedId, ...data}
    }

    async findall(){
        return this.collection().find().toArray();
    }
    
    async findByEmail(email: string){
        return this.collection().findOne({email});
    }
    async update(id: string, data: Partial<any>) {
    // Usamos $set para actualizar solo los campos enviados
    const result = await this.collection().findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { ...data, updatedAt: new Date() } },
        { returnDocument: 'after' } // Retorna el documento ya actualizado
    );
    return result;
}

async delete(id: string) {
    const result = await this.collection().deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0; // Devuelve true si borró algo
}
}
