import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import usersRouter  from './modules/users/users.routes.js';   
import v1Routes from './api/v1/index.js';
import { errorMiddleware } from './middlewares/error.middlewares.js';

export const app = express();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());


app.use('/users', usersRouter);
app.use('/api/v1', v1Routes);

app.use(errorMiddleware);
