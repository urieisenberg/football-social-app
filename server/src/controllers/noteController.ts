import { Request, Response } from 'express';
import { Note, INote, Ticket, User } from '../models';
import { validateNote } from '../validators';

export const createNote = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to create note');

    const { text } = req.body;
    const validated = validateNote.safeParse({ text });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    const note: INote = new Note({
      user: req.user.id,
      ticket: req.params.ticketId,
      text,
    });
    if (note) res.status(200).json(note);
    await note.save();
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update note');

    const note = await Note.findById(req.params.noteId);
    if (!note) return res.status(404).send('Note not found');

    if (note.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to update note');

    const { text } = req.body;
    const validated = validateNote.safeParse({ text });
    if (!validated.success) {
      return res.status(400).json({ message: validated.error.message });
    }

    note.text = text;
    if (note) res.status(200).json(note);
    await note.save();
  } catch (error: any) {
    res.status(500).send('Something went wrong');
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send('User not found');

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send('Ticket not found');

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to delete note');

    const note = await Note.findById(req.params.noteId);
    if (!note) return res.status(404).send('Note not found');

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
    const user = await User.findById(req.user.id)
    if (!user) return res.status(401).send('User not found')

    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) return res.status(404).send('Ticket not found')

    if (ticket.user.toString() !== req.user.id)
      return res.status(401).send('Not authorized to view notes')

    const notes = await Note.find({ ticket: req.params.id })
    if (notes) res.status(200).json(notes)
  } catch (error: any) {
    res.status(500).send('Something went wrong')
  }
}

