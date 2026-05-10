import  jwt, { type JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env.js';

export interface jwtpayload {
    sub: string;
    email:string;
    role:string;

}


export const signToken = (payload: JwtPayload): string => { 
    return jwt.sign(payload,env.jwtSecret as string, {
        expiresIn:"1d",
    });
}
    export const VerifyToken = (token: string): jwtpayload =>   { 
    return jwt.verify(token,env.jwtSecret as string)as jwtpayload;
    
}
