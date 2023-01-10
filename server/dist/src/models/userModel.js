"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 2,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
        min: 6,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    team: {
        type: Object,
        required: true,
    },
    follows: {
        type: Array,
        default: [],
    },
    followers: {
        type: Array,
        default: [],
    },
    favFixtures: {
        type: Array,
        default: [],
    },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', userSchema);
