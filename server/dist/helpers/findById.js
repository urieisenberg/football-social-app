"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNote = exports.findTicket = exports.findComment = exports.findPost = exports.findUser = void 0;
const models_1 = require("../models");
const findUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findById(id);
    if (!user)
        throw new Error('User not found');
    return user;
});
exports.findUser = findUser;
const findPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield models_1.Post.findById(id);
    if (!post)
        throw new Error('Post not found');
    return post;
});
exports.findPost = findPost;
const findComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield models_1.Comment.findById(id);
    if (!comment)
        throw new Error('Comment not found');
    return comment;
});
exports.findComment = findComment;
const findTicket = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield models_1.Ticket.findById(id);
    if (!ticket)
        throw new Error('Ticket not found');
    return ticket;
});
exports.findTicket = findTicket;
const findNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield models_1.Note.findById(id);
    if (!note)
        throw new Error('Note not found');
    return note;
});
exports.findNote = findNote;
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
