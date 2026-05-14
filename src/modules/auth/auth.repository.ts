import { getDb } from "../../config/database.js";
import type { User } from "../users/user.model.js";




export class  authRepository {
private collection(){
    return getDb().collection<User>('users');


}

async findBycorreoInstitucional(correoInstitucional: string): Promise<User | null>{
    return this.collection().findOne({correoInstitucional});
}
async create(user: User): Promise<User> {
    const result = await this.collection().insertOne(user);
    return {_id: result.insertedId, ...user};
}
}