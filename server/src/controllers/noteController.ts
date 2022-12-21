import { Request, Response } from 'express';
import { Note, INote, Ticket, User } from '../models';
import { noteSchema as schema } from '../schemas';
import {
  findNote,
  validateSchema,
  validateUpdate,
  handleErrors,
} from '../helpers';

export const createNote = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.ticketId,
    });

    validateSchema({ schema, req, res });

    const note: INote = await Note.create({
      user: req.user.id,
      ticket: req.params.ticketId,
      text: req.body.text,
    });
    if (note) res.status(200).json(note);
    else res.status(400).send('Invalid note data');
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.ticketId,
    });

    validateUpdate({
      req,
      res,
      Model: Note,
      id: req.params.noteId,
    });

    const note = await findNote(req.params.noteId);

    validateSchema({ schema, req, res });

    note.text = req.body.text;
    if (note) res.status(200).json(note);
    await note.save();
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.ticketId,
    });

    validateUpdate({
      req,
      res,
      Model: Note,
      id: req.params.noteId,
    });

    await Note.findByIdAndDelete(req.params.noteId);
    res.status(200).send('Note removed');
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const getNotes = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.ticketId,
    });
    const notes = await Note.find({ ticket: req.params.ticketId });
    if (notes) res.status(200).json(notes);
  } catch (error: any) {
    handleErrors(res, error);
  }
};

export const deleteNotes = async (req: Request, res: Response) => {
  try {
    validateUpdate({
      req,
      res,
      Model: Ticket,
      id: req.params.ticketId,
    });

    await Note.deleteMany({ ticket: req.params.id });
    res.status(200).send('Notes removed');
  } catch (error: any) {
    handleErrors(res, error);
  }
};
