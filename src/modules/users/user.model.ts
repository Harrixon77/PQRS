import {ObjectId} from 'mongodb'; 

export interface User {
    _id?: ObjectId;
    nombres: string;
    correoInstitucional: string;
    sede: string;
    programa: string;
    password: string;
    role: "student" | "admin" | "support";
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}