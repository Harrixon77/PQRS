/*import mongoose from 'mongoose';
import { boolean } from 'zod';

const pqrsSchema = new mongoose.Schema({
    titulo:{ type: String, required: true },
    descripcion:{ type: String, required: true },
    tipo:{ type: String, required: true},
    estado:{ type : String , default : "pendiente"},
    anonimo:{ type : boolean, default : false},
    correoinstitucional : { type : String , required : true},
}, {
    timestamps: true
});

export const Pqrs = mongoose.model("Pqrs", pqrsSchema);
*/