import { Response } from 'express';
import { User, Post, Comment, Ticket, Note } from '../models';

export const findUser = async (id: string) => {
  const user = await User.findById(id);
  if (!user) throw new Error('User not found');
  return user;
};

export const findPost = async (id: string) => {
  const post = await Post.findById(id);
  if (!post) throw new Error('Post not found');
  return post;
};

export const findComment = async (id: string) => {
  const comment = await Comment.findById(id);
  if (!comment) throw new Error('Comment not found');
  return comment;
};

export const findTicket = async (id: string) => {
  const ticket = await Ticket.findById(id);
  if (!ticket) throw new Error('Ticket not found');
  return ticket;
};

export const findNote = async (id: string) => {
  const note = await Note.findById(id);
  if (!note) throw new Error('Note not found');
  return note;
};

// interface FindByIdFn {
//   res: Response;
//   id: string;
// }

// export const findUser = async ({ res, id }: FindByIdFn) => {
//   const user = await User.findById(id);
//   if (!user) return res.status(404).send('User not found');
//   return user;
// };

// export const findPost = async ({ res, id }: FindByIdFn) => {
//   const post = await Post.findById(id);
//   if (!post) return res.status(404).send('Post not found');
//   return post;
// };

// export const findComment = async ({ res, id }: FindByIdFn) => {
//   const comment = await Comment.findById;
//   if (!comment) return res.status(404).send('Comment not found');
//   return comment;
// };

// export const findTicket = async ({ res, id }: FindByIdFn) => {
//   const ticket = await Ticket.findById(id);
//   if (!ticket) return res.status(404).send('Ticket not found');
//   return ticket;
// };

// export const findNote = async ({ res, id }: FindByIdFn) => {
//   const note = await Note.findById(id);
//   if (!note) return res.status(404).send('Note not found');
//   return note;
// };
