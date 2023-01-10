"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = void 0;
const zod_1 = require("zod");
exports.validateUpdateUser = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20).optional(),
    password: zod_1.z.string().min(6).max(1024).optional(),
    email: zod_1.z.string().email().min(6).max(50).optional(),
});
