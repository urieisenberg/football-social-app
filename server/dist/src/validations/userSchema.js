"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string().min(6).max(20),
    email: zod_1.z.string().email().min(6).max(50),
    team: zod_1.z.object({
        name: zod_1.z.string(),
        id: zod_1.z.number(),
        logo: zod_1.z.string(),
    }),
});
