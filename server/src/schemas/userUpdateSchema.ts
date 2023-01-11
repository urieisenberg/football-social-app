import { z } from 'zod';

export const userUpdateSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  password: z.string().min(6).max(1024).optional(),
  email: z.string().email().min(6).max(50).optional(),
});
