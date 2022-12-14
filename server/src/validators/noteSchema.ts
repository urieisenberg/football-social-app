import { z } from 'zod';

export const validateNote = z.object({
  text: z.string().min(5).max(50),
});


