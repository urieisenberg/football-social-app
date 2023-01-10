"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTicket = void 0;
const zod_1 = require("zod");
exports.validateTicket = zod_1.z.object({
    subject: zod_1.z.enum(['general', 'bug', 'feature', 'other']),
    message: zod_1.z.string().min(10).max(500),
});
