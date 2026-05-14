import { type Request, type Response,type NextFunction } from "express";
import { VerifyToken } from "../libs/jwt.js";


export const authMiddleware = (
    req: any,
    res: Response,
     next: NextFunction
    ) => {

        try{

        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith('Bearer ')){
            req.user = null;
            return next();
            }

        const token = authHeader.split(' ')[1];
            if (!token) {
                req.user = null;
                return next();
            }


        const payload = VerifyToken(token);
        req.user = payload;
        next();


        
        }catch (error) {
    req.user = null;
    next();

    
            
    } 
     }
