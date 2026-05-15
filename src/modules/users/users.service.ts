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

async update(id: string, data: any) {
    const user = await this.repository.update(id, data);
    if (!user) {
        throw new Error('Usuario no encontrado para actualizar');
    }
    return user;
}

async delete(id: string) {
    const eliminado = await this.repository.delete(id);
    if (!eliminado) {
        throw new Error('No se pudo eliminar: Usuario no encontrado');
    }
    return { message: "Usuario eliminado exitosamente" };
}
}