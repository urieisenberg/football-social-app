import express, { Express, Request, Response } from 'express';
import dotevn from 'dotenv';
import 'colors';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.green.bold);
});


