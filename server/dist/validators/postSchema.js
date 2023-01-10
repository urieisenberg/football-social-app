"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePost = void 0;
const zod_1 = require("zod");
exports.validatePost = zod_1.z.object({
    text: zod_1.z.string().min(2).max(100),
    type: zod_1.z.enum(['feed', 'team']),
});
