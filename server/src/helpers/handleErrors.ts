import { Response } from 'express';

export const handleErrors = (res: Response, error: any) => {
  res.status(500).json({
    message: 'Oops! Something went wrong',
    error: error.message,
  });
};
