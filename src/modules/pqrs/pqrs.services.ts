import { de, th } from "zod/locales";
import { CreatePqrs } from "./pqrs.repository.js";
import { GetAllPqrs } from "./pqrs.repository.js";
import { GetPqrsById } from "./pqrs.repository.js";
import { UpdatePqrs } from "./pqrs.repository.js";
import { DisablePqrs } from "./pqrs.repository.js";



export const CreatePqrsService = async (data: any) => {
    console.log(data.correoInstitucional);
    const CategoriaValida = [
        "peticion",
        "queja",
        "reclamo",
        "sugerencia" 
    ];

    if (!CategoriaValida.includes(data.tipo.toLowerCase())) {

        throw new Error("Tipo de PQRS no valido");
    }

    if (!data.correoinstitucional.endsWith("@itc.edu.co")) {
        throw new Error("Correo institucional no valido");
    }

    const NuevaPqrs = {
        titulo : data.titulo,
        descripcion : data.descripcion,
        tipo : data.tipo,
        correoinstitucional : data.correoinstitucional,
        anonimo : data.anonimo || false,
        estado : "pendiente",
        activo: true,
        createdAt : new Date(),

    };
    return await CreatePqrs(NuevaPqrs);
    };


export const GetAllPqrsService = async () => {
    return await GetAllPqrs();
}

export const GetPqrsByIdService = async (id: string) => {
    const pqrs = await GetPqrsById(id);
    if (!pqrs){
        throw new Error("PQRS no encontrada");
    }
    return pqrs;
    }

    export const UpdatePqrsService = async (id: string, data: any) => {
        const CategoriaValida = [

            "En Proceso",
            "resuelta",
            "rechazada" 
        ];
console.log(data.estado);
        if (data.estado && !CategoriaValida.includes(data.estado.toLowerCase())) {
            throw new Error("Estado de PQRS no valido");
        }
        const response = await UpdatePqrs(id, data);
if (response.matchedCount === 0) {
    throw new Error("PQRS no encontrada");
}
return response;
    }

    export const DisablePqrsService = async (id: string) => {

        const response = await DisablePqrs(id);
        
if (response.matchedCount === 0) {
    throw new Error("PQRS no encontrada");
}
return response;
    }
    