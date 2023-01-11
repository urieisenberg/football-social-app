import { z } from 'zod';

export const ticketSchema = z.object({
  subject: z.enum(['general', 'bug', 'feature', 'other']),
  message: z.string().min(10).max(500),
});
