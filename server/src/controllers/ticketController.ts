import { Request, Response } from 'express';
import { Ticket, ITicket, User } from '../models';
import { ticketSchema as schema } from '../schemas/ticketSchema';
import { validateSchema } from '../helpers';

export const createTicket = async (req: Request, res: Response) => {
  try {
    validateSchema({ schema, req, res });

    const ticket: ITicket = new Ticket({
      user: req.user.id,
      subject: req.body.subject,
      message: req.body.message,
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
    validateSchema({ schema, req, res });
    
    const ticket = await Ticket.findById(req.params.id);

    if (ticket?.user.toString() !== req.user.id)
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

    if (ticket?.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete ticket');

    await ticket?.remove();
    res.status(200).send(ticket?._id);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const closeTicket = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (ticket?.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to close ticket');

    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status: 'closed' },
      { new: true }
    );
    if (updatedTicket) res.status(200).json(updatedTicket);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getTicketById = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (ticket?.user.toString() !== req.user.id)
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
