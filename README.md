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
