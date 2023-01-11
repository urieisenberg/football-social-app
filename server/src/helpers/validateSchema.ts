import { Request, Response } from 'express';
import { ZodObject } from 'zod';

interface ValidateSchemaFn {
  schema: ZodObject<any>;
  req: Request;
  res: Response;
}

export const validateSchema = ({ schema, req, res }: ValidateSchemaFn) => {
  const validated = schema.safeParse(req.body);
  if (!validated.success) {
    return res.status(400).json({ message: validated.error.message });
  }
};
