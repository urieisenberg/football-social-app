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
exports.deleteNotes = exports.getNotes = exports.deleteNote = exports.updateNote = exports.createNote = void 0;
const models_1 = require("../models");
const schemas_1 = require("../schemas");
const helpers_1 = require("../helpers");
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.ticketId,
        });
        (0, helpers_1.validateSchema)({ schema: schemas_1.noteSchema, req, res });
        const note = yield models_1.Note.create({
            user: req.user.id,
            ticket: req.params.ticketId,
            text: req.body.text,
        });
        if (note)
            res.status(200).json(note);
        else
            res.status(400).send('Invalid note data');
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.createNote = createNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.ticketId,
        });
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Note,
            id: req.params.noteId,
        });
        const note = yield (0, helpers_1.findNote)(req.params.noteId);
        (0, helpers_1.validateSchema)({ schema: schemas_1.noteSchema, req, res });
        note.text = req.body.text;
        if (note)
            res.status(200).json(note);
        yield note.save();
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.ticketId,
        });
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Note,
            id: req.params.noteId,
        });
        yield models_1.Note.findByIdAndDelete(req.params.noteId);
        res.status(200).send('Note removed');
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deleteNote = deleteNote;
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.ticketId,
        });
        const notes = yield models_1.Note.find({ ticket: req.params.ticketId });
        if (notes)
            res.status(200).json(notes);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getNotes = getNotes;
const deleteNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.ticketId,
        });
        yield models_1.Note.deleteMany({ ticket: req.params.id });
        res.status(200).send('Notes removed');
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deleteNotes = deleteNotes;
