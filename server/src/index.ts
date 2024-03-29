import express, { Application, Express, Request, Response } from 'express';
import path from 'path';
import dotevn from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import 'colors';
import { connectDB } from './config/connectDB';
import { authRoutes, ticketRoutes, postRoutes, userRoutes } from './routes';

const app: Application = express();
const port = process.env.PORT || 4747;

dotevn.config();
connectDB();

app.options('*', cors());
app.use(cors());
app.use(helmet());
app.use(morgan(':method :url :status :response-time ms'.bgWhite));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`~~ Server running on port ${port} ~~`.green.bold);
});
