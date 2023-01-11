"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    password: zod_1.z.string().min(6).max(20),
    email: zod_1.z.string().email().min(6).max(50),
});
