import  { authRepository } from "./auth.repository.js";
import type {User} from "../users/user.model.js";                       
import { hashPassword, comparePassword } from "../../libs/bcrypt.js";
import { signToken } from "../../libs/jwt.js";


export class authService {

    private repository = new authRepository();

    async register  (user: User){
        const exists =await this.repository.findByEmail(user.correoInstitucional);


        if(exists){
            throw new Error('User already exists');
        }
        

        const hashedPassword = await hashPassword(user.password);




        const newUser: User = {
             ...user,
            password: hashedPassword,
            role: "student",
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };



        user.password = hashedPassword;;

        const result = await this.repository.create(newUser);
        
        const token = signToken({
            sub: result._id!.toString(),
            correoInstitucional: result.correoInstitucional,
            role: result.role
        });
        return {
            user:{
                id: result._id,
                name: result.nombre,  
                correoInstitucional: result.correoInstitucional,
                role: result.role
                

            },
            token,
        };
    
    
    
    }


async login (data:any) {
const user = await this.repository.findByEmail(data.correoInstitucional);
if(!user){
    throw new Error (' Credenciales invalidas');
}
const isValidPassword = await comparePassword(data.password, user.password);
if (!isValidPassword){

    throw new Error (' Credenciales invalidas');
}
    const token = signToken({
            sub: user._id!.toString(),
            correoInstitucional: user.correoInstitucional,
            role: user.role
        });
        return {
            user:{
                id: user._id,
                name: user.nombre,  
                correoInstitucional: user.correoInstitucional,
                role: user.role
                

            },
            token,
        }
}
}
