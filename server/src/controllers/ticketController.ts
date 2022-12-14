import { Request, Response } from 'express';
import { Ticket, ITicket } from '../models/ticketModel';
import { User } from '../models/userModel';
import { validateTicket } from '../validators/ticketSchema';

export const createTicket = async (req: Request, res: Response) => {
  try {
    const { subject, message } = req.body;
    const validated = validateTicket.safeParse({ subject, message });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const ticket: ITicket = new Ticket({
      user: req.user.id,
      subject,
      message,
      status: 'open',
    });
    if (ticket) res.status(200).json(ticket);
    await ticket.save();
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};
