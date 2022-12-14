import express, { Application, Express, Request, Response } from 'express';
import dotevn from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import 'colors';
import { connectDB } from './config/connectDB';
import { authRoutes } from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

dotevn.config();
connectDB();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  credentials: true,
  accessControlAllowOrigin: '*',
};

app.use(morgan(':method :url :status :response-time ms'.bgWhite));
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`~~ Server running on port ${port} ~~`.green.bold);
});
