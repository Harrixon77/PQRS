import {app} from "./app.js";
import {env} from "./config/env.js";    
import {connectDb} from "./config/database.js";
import { CreatePqrs } from "./modules/pqrs/pqrs.repository.js";
import { CreatePqrsService } from "./modules/pqrs/pqrs.services.js";


const bootstrap = async ()=>{
    await connectDb();

    /*const testpqrs = async () => {

        const nuevaPqrs = await CreatePqrsService({
            titulo : "Pruebaservicecorrecta",
            descripcion : "prueba de pqrs",
            tipo : "Sugerencia",    
            correoinstitucional :"hb@itc.edu.co"

        });
        console.log (nuevaPqrs);
    };
    await testpqrs();
*/

    app.listen(env.port, () => {
        console.log ( `Servidor Corriendo en puerto ${env.port}` );
    })
}
 bootstrap();