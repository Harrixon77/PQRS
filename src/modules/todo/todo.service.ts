import { ToDoRepository } from "./todo.repository.js";
export class ToDoService {

    private repository = new    ToDoRepository();

    async addToDo(data: any){ 
       
    
        return this.repository.addToDo(data);
    }
async findallToDos(){
    return this.repository.findallToDos();
}
}
