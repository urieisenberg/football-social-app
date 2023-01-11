"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteSchema = void 0;
const zod_1 = require("zod");
exports.noteSchema = zod_1.z.object({
    text: zod_1.z.string().min(5).max(50),
});
