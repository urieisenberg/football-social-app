"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ticket: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true,
    },
    text: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
}, { timestamps: true });
exports.Note = (0, mongoose_1.model)('Note', noteSchema);
