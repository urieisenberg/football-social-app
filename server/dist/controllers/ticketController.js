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
exports.getTickets = exports.getTicketById = exports.closeTicket = exports.deleteTicket = exports.updateTicket = exports.createTicket = void 0;
const models_1 = require("../models");
const ticketSchema_1 = require("../schemas/ticketSchema");
const helpers_1 = require("../helpers");
const createTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateSchema)({ schema: ticketSchema_1.ticketSchema, req, res });
        const ticket = new models_1.Ticket({
            user: req.user.id,
            subject: req.body.subject,
            message: req.body.message,
            status: 'open',
        });
        if (ticket)
            res.status(200).json(ticket);
        yield ticket.save();
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.createTicket = createTicket;
const updateTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateSchema)({ schema: ticketSchema_1.ticketSchema, req, res });
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.id,
        });
        const updatedTicket = yield models_1.Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTicket)
            res.status(200).json(updatedTicket);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.updateTicket = updateTicket;
const deleteTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.id,
        });
        yield models_1.Ticket.findByIdAndDelete(req.params.id);
        res.status(200).send(req.params.id);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deleteTicket = deleteTicket;
const closeTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.id,
        });
        const updatedTicket = yield models_1.Ticket.findByIdAndUpdate(req.params.id, { status: 'closed' }, { new: true });
        if (updatedTicket)
            res.status(200).json(updatedTicket);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.closeTicket = closeTicket;
const getTicketById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Ticket,
            id: req.params.id,
        });
        const ticket = yield (0, helpers_1.findTicket)(req.params.id);
        res.status(200).json(ticket);
    }
    catch (error) {
        console.log(error);
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getTicketById = getTicketById;
const getTickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tickets = yield models_1.Ticket.find({ user: req.user.id });
        if (!tickets)
            return res.status(404).send('No tickets found');
        res.status(200).json(tickets);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getTickets = getTickets;
