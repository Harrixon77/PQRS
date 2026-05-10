import { th } from "zod/locales";
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
}
