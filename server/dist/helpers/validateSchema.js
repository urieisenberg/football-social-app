"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = ({ schema, req, res }) => {
    const validated = schema.safeParse(req.body);
    if (!validated.success) {
        return res.status(400).json({ message: validated.error.message });
    }
};
exports.validateSchema = validateSchema;
