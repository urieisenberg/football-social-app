"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['feed', 'team'],
    },
    text: {
        type: String,
        required: true,
        min: 2,
        max: 100,
    },
    username: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
    },
    comments: {
        type: Array,
        required: true,
    },
}, { timestamps: true });
exports.Post = (0, mongoose_1.model)('Post', postSchema);
