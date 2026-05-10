import { id } from "zod/locales";
import { getDb } from "../../config/database.js";
import { ObjectId } from "mongodb";


export const CreatePqrs = async (Data: any) => {
    const db = getDb();
    const response  = await db.collection("pqrs").insertOne(Data);
    return response;
}

    export const GetAllPqrs = async () => {
        const db = getDb();
        
        return await db
        .collection("pqrs")
        .find({
            activo: true
        })
        .toArray();
    }   
   export const GetPqrsById = async (id: string) => {

    const db = getDb();
    return await db
    .collection("pqrs")
    .findOne({_id: new ObjectId(id)});
   };

   export const UpdatePqrs = async (id: string, data: any) => {
    const db = getDb();
    
    return await db.collection("pqrs").updateOne(
        {
            _id: new ObjectId(id)
        },
        {
            $set: data
        }
    )

   };

    export const DisablePqrs = async (id: string) => {
        const db = getDb();
        
        return await db.collection("pqrs").updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: {
                    activo: false
                }
                
            }
        )

    };
