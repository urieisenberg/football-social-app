"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateComment = void 0;
const zod_1 = require("zod");
exports.validateComment = zod_1.z.object({
    comment: zod_1.z.string().min(2).max(50),
});
