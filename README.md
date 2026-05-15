# 🏛️ Sistema de Gestión de PQRS - Backend

Este proyecto es una API REST profesional desarrollada con **Node.js** y **TypeScript** para la gestión de Peticiones, Quejas, Reclamos y Sugerencias (PQRS).
El sistema permite a los estudiantes crear solicitudes (identificados o anónimos) y a los administradores gestionar soluciones.

## 🚀 Características Principales
- **Autenticación:** Sistema de Login con JWT (JSON Web Tokens).
- **Módulo de PQRS:** CRUD completo con persistencia en MongoDB.
- **Categorización:** Clasificación dinámica de solicitudes por áreas (Académico, Financiero, etc.).
- **Gestión de Respuestas:** Conexión automática entre el módulo de respuestas y el estado de la PQRS (cambia a "resuelta" al responder).
- **Arquitectura Limpia:** Patrón de diseño **Repository - Service - Controller**.

## 🛠️ Stack Tecnológico
- **Lenguaje:** TypeScript
- **Entorno:** Node.js
- **Framework:** Express.js
- **Base de Datos:** MongoDB (Driver nativo)
- **Seguridad:** Bcrypt para contraseñas y JWT para tokens de acceso.

## 📦 Cómo ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Harrixon77/PQRS.git](https://github.com/Harrixon77/PQRS.git)
2. **Instalar dependencias:**
npm install

3.
**Variables de Entorno:**
Crea un archivo .env en la raíz con los siguientes datos:

PORT=3000

MONGO_URI=tu_conexion_a_mongo

JWT_SECRET=tu_clave_secreta

4. **ENDPOINTS**
Método,Endpoint,Descripción,Acceso
POST,/api/v1/auth/login,Autenticación de usuario,Público
POST,/api/v1/auth/registro,Registro de nuevos usuarios,Público
GET,/api/v1/pqrs,Listar todas las solicitudes,Admin
POST,/api/v1/pqrs,Crear nueva PQRS,Usuario/Anónimo
PATCH,/api/v1/pqrs/:id,Cambiar estado (pendiente/resuelta),Admin
GET,/api/v1/categories,Obtener tipos de PQRS,Público
POST,/api/v1/responses,Responder a una PQRS y cerrarla,Admin

## ⚙️ Flujo de Trabajo
1. **Creación:** El usuario registra una PQRS seleccionando una **Categoría** predefinida.
2. **Revisión:** El Administrador visualiza las solicitudes entrantes en el panel principal.
3. **Resolución:** Al generar una **Respuesta**, el sistema vincula automáticamente el `pqrsId` y actualiza el estado del ticket a `resuelta`.
