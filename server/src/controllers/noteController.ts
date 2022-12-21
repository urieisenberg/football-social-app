import { Request, Response } from 'express';
import { Note, INote, Ticket, User } from '../models';
import { noteSchema as schema } from '../schemas';
import { findTicket, findNote, validateSchema } from '../helpers';

export const createNote = async (req: Request, res: Response) => {
  try {
    const ticket = await findTicket(req.params.ticketId);

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to create note');

    validateSchema({ schema, req, res });

    const note: INote = await Note.create({
      user: req.user.id,
      ticket: req.params.ticketId,
      text: req.body.text,
    });
    if (note) res.status(200).json(note);
    else res.status(400).send('Invalid note data');
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const ticket = await findTicket(req.params.ticketId);

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update note');

    const note = await findNote(req.params.noteId);

    if (note.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update note');

    validateSchema({ schema, req, res });

    note.text = req.body.text;
    if (note) res.status(200).json(note);
    await note.save();
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket?.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete note');

    const note = await findNote(req.params.noteId);

    if (note.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete note');

    await note.remove();
    res.status(200).send('Note removed');
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const getNotes = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket?.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to view notes');

    const notes = await Note.find({ ticket: req.params.ticketId });
    if (notes) res.status(200).json(notes);
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deleteNotes = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket?.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete notes');

    await Note.deleteMany({ ticket: req.params.id });
    res.status(200).send('Notes removed');
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};
