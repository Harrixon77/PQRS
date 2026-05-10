import { UsersRepository } from "./users.repository.js";
export class UsersService {

    private repository = new UsersRepository();

    async register(data: any){ {

        const exists =await this.repository.findByEmail(data.email);
        if(exists){
            throw new Error('Usuario  ya existe ');
    }}
        return this.repository.create(data);
    }
async findallUsers(){
    return this.repository.findall();
}
}