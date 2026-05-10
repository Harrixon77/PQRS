import { Db, MongoClient } from "mongodb";
import { env } from "./env.js";

let client: MongoClient;
let db: Db;

export const connectDb = async (): Promise<void> => {
    client = new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.mongoDbName);
    console.log('Mongo se conecto')
}

export const getDb = (): Db => {
    if(!db){
        throw new Error('Mongo no esta conectado');
    }
    return db;
}