import {ObjectId} from "mongodb";

export interface Category {
    _id?: ObjectId;
    nombre: string;
    descripcion: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;

}
