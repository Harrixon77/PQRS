import {ZodType} from 'zod';
import {type NextFunction, type Request, type Response, } from 'express';
export const validate = (schema: ZodType) => (req: Request, res: Response, next:NextFunction) => {

const resul = schema.safeParse(req.body);

if(!resul.success){
    return res.status(400).json(
        {message: ' Error de validacion',
    errors: resul.error.flatten()
        }
)
}

req.body = resul.data;
next();
}
