import {ObjectId} from 'mongodb'; 

export interface User {
    _id?: ObjectId;
    nombre: string;
    correoInstitucional: string;
    sede: string;
    programa: string;
    password: string;
    role: "student" | "admin" | "support";
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
}