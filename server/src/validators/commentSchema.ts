import { z } from 'zod';

export const validateComment = z.object({
  comment: z.string().min(2).max(50),
});
