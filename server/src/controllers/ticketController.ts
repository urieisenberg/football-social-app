import { Request, Response } from 'express';
import { Ticket, ITicket } from '../models';
import { ticketSchema as schema } from '../schemas/ticketSchema';
import {
  findTicket,
  validateSchema,
  validateUpdate,
  handleErrors,
} from '../helpers';

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
    handleErrors(res, error);
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  try {
    validateSchema({ schema, req, res });

    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.id,
    });
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedTicket) res.status(200).json(updatedTicket);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.id,
    });
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).send(req.params.id);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const closeTicket = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.id,
    });

    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status: 'closed' },
      { new: true }
    );
    if (updatedTicket) res.status(200).json(updatedTicket);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getTicketById = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.id,
    });

    const ticket = await findTicket(req.params.id);
    res.status(200).json(ticket);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id });
    if (!tickets) return res.status(404).send('No tickets found');
    res.status(200).json(tickets);
  } catch (error: any) {
    handleErrors(res, error);
  }
};
