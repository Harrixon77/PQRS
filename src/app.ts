import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import usersRouter  from './modules/users/users.routes.js';   
import v1Routes from './api/v1/index.js';
import { errorMiddleware } from './middlewares/error.middlewares.js';
import pqrs from './modules/pqrs/pqrs.routes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import { openApiSpec } from './config/openapi.js';
import swaggerUi from 'swagger-ui-express';
import usersRoutes from './modules/users/users.routes.js';
import authRoutes from './modules/auth/auth.routes.js';

export const app = express();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());




app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));
app.use('/pqrs', pqrs);
app.use('/users', usersRouter);
app.use('/api/v1', v1Routes);
app.use("/auth", authRoutes);

app.use("/users", usersRoutes);
app.use(helmet({
  contentSecurityPolicy: false, // Esto permite que Swagger cargue sus estilos y scripts
}));
app.use(errorMiddleware);
