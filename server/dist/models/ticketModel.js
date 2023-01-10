"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const mongoose_1 = require("mongoose");
const ticketSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subject: {
        type: String,
        required: true,
        enum: ['general', 'bug', 'feature', 'other'],
    },
    message: {
        type: String,
        required: true,
        min: 10,
        max: 500,
    },
    status: {
        type: String,
        required: true,
        enum: ['open', 'closed'],
    },
}, { timestamps: true });
exports.Ticket = (0, mongoose_1.model)('Ticket', ticketSchema);
