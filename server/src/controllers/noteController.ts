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


