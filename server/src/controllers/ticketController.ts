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

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const { subject, message, status } = req.body;
    const validated = validateTicket.safeParse({ subject, message });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update ticket');

    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedTicket) res.status(200).json(updatedTicket);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete ticket');

    await ticket.remove();
    res.status(200).send('Ticket removed');
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getTicketById = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to view ticket');

    res.status(200).json(ticket);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id });
    if (!tickets) return res.status(404).send('No tickets found');
    res.status(200).json(tickets);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};
