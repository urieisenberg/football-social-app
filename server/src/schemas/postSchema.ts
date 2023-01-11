import { z } from 'zod';

export const postSchema = z.object({
  text: z.string().min(2).max(100),
  type: z.enum(['feed', 'team']),
});
