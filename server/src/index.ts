import express, { Application, Express, Request, Response } from 'express';
import dotevn from 'dotenv';
import 'colors';
import { connectDB } from './config/connectDB';
import { authRoutes } from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

dotevn.config();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`.green.bold);
});
