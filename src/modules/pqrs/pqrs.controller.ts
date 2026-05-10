import {type Request, type Response} from "express";
import { CreatePqrsService } from "./pqrs.services.js";
import { ca, da } from "zod/locales";
import { GetAllPqrsService } from "./pqrs.services.js";
import { GetPqrsByIdService } from "./pqrs.services.js";
import { UpdatePqrsService } from "./pqrs.services.js";
import { DisablePqrsService } from "./pqrs.services.js";


export const CreatePqrsController = async (

    req :Request,
    res: Response
)=> {

    try {



        const response = await CreatePqrsService(req.body);

        res.status(201).json({
            message : "PQRS creada exitosamente",
            data: response 
        
        });
    }catch (error:  any) {
        res.status(400).json({
            message : "Error al crear PQRS",
            error : error.message
        });
    } 
}



export const GetAllPqrsController = async (
    req: Request,
    res: Response 
) => {

    try {
        const response = await GetAllPqrsService();
        res.status(200).json({
            message: "Se han obtenido todas las PQRS exitosamente",
            data: response
        });
    } catch (error: any) {
        res.status(400).json({
            message: "Error al obtener las PQRS",
            error: error.message
        }

        )
    }
}

export const GetPqrsByIdController = async (

    req :Request,
    res: Response
)=> {

    try {
        const id = req.params.id as string;



        const response = await GetPqrsByIdService(id);

        res.status(201).json({
            message : "PQRS obtenida exitosamente",
            data: response 
        
        });
    }catch (error:  any) {
        res.status(400).json({
            message : "Error al obtener PQRS",
            error : error.message
        });
    } 
}

export const UpdatePqrsController = async (

    req :Request,
    res: Response
)=> {

    try {
        const id = req.params.id as string;



        const response = await UpdatePqrsService(id, req.body);

        res.status(201).json({
            message : "PQRS actualizada exitosamente",
            data: response 
        
        });
    }catch (error:  any) {
        res.status(400).json({
            message : "Error al actualizar PQRS",
            error : error.message
        });
    } 
}


export const DisablePqrsController = async (

    req :Request,
    res: Response
)=> {

    try {
        const id = req.params.id as string;



        const response = await DisablePqrsService(id);

        res.status(201).json({
            message : "PQRS deshabilitada exitosamente",
            data: response 
        
        });
    }catch (error:  any) {
        res.status(400).json({
            message : "Error al deshabilitar PQRS",
            error : error.message
        });
    } 
}