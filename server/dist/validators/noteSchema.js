"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNote = void 0;
const zod_1 = require("zod");
exports.validateNote = zod_1.z.object({
    text: zod_1.z.string().min(5).max(50),
});
