import { z } from 'zod';

export const noteSchema = z.object({
  text: z.string().min(5).max(50),
});


