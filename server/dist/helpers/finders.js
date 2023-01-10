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
