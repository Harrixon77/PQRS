import { type Request, type Response,type NextFunction } from "express";
import { VerifyToken } from "../libs/jwt.js";


export const authMiddleware = (
    req: Request, 
    res: Response,
     next: NextFunction
    ) => {

        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith('Bearer')){
            return res.status(401).json({
                message: 'No se proporcionó un token de autenticación'
            })
        }

        const token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({
                message: 'No se proporcionó un token de autenticación'
            })
        }

            const payload = VerifyToken(token);

        console.log(payload)

        next();
    
            
    } //cath (error) {
       // return res.status(401).json({
          //  message: 'Token de autenticación inválido',
      //