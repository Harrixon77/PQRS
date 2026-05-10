import { th } from "zod/locales";
import { getDb } from "../../config/database.js";


export class ToDoRepository {
    private collection(){
        return getDb().collection('todos');
    }

    async addToDo (data: any){
        const result = await this.collection().insertOne(data);
        return {result: result.insertedId, ...data}
    }

    async findallToDos(){
        return this.collection().find().toArray();
    }
    

}
