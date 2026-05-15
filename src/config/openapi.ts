import path from "path";
import { fileURLToPath } from "url";
import swaggerJsdoc from "swagger-jsdoc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// En config/openapi.js
export const openApiSpec = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API EVENTS',
            version: '1.0.0',
            description: 'Documentación de endpoints de la API'
        },
        // ... (tus servers y securitySchemes)
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
            schemas: { // <--- AGREGA ESTO
                User: {
                    type: 'object',
                    properties: {
                        nombre: { type: 'string' },
                        correoInstitucional: { type: 'string' },
                        sede: { type: 'string' },
                        programa: { type: 'string' },
                        role: { type: 'string', enum: ['student', 'admin', 'support'] },
                        activo: { type: 'boolean' }
                    }
                }
            }
        }
    },
    // Prueba con rutas relativas simples si path.join falla
    apis: ['./src/modules/**/*.routes.ts', './src/modules/**/*.routes.js', './modules/**/*.routes.js'] 
});