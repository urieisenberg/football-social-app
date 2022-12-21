import { Request, Response } from 'express';
import { Document, Model } from 'mongoose';
import { Comment, Note, Ticket } from '../models';

interface ValidateUpdateFn<T extends Document> {
  req: Request;
  res: Response;
  Model: Model<T>;
  id: string;
}

export const validateUpdate = async <T extends Document>({
  req,
  res,
  Model,
  id,
}: ValidateUpdateFn<T>) => {
  try {
    const document = await Model.findById(id);
    if (!document) return res.status(404).send(`${document} not found}`);
    if (
      document instanceof Comment ||
      document instanceof Note ||
      document instanceof Ticket
    ) {
      if (document?.user.toString() !== req.user.id)
        return res.status(401).send('Not authorized');
    }
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};
