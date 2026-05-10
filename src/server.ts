import {app} from "./app.js";
import {env} from "./config/env.js";    
import {connectDb} from "./config/database.js";



const bootstrap = async ()=> (
    await connectDb(),


    app.listen(env.port, () => {
        console.log ( `Servidor Corriendo en puerto ${env.port}` );
    })
)
 bootstrap();