import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(1024),
  email: z.string().email().min(6).max(50),
  team: z.object({
    name: z.string(),
    id: z.number(),
    logo: z.string(),
  }),
});
