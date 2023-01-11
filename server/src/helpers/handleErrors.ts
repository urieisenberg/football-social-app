import { Response } from 'express';

export const handleErrors = (res: Response, error: any) => {
  res.status(500).send('Something went wrong');
};
