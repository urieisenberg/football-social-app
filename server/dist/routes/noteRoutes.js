"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)({ mergeParams: true });
exports.noteRoutes = router;
router
    .route('/')
    .post(authMiddleware_1.protect, controllers_1.createNote)
    .get(authMiddleware_1.protect, controllers_1.getNotes)
    .delete(authMiddleware_1.protect, controllers_1.deleteNotes)
    .put(authMiddleware_1.protect, controllers_1.updateNote);
router.route('/:noteId').delete(authMiddleware_1.protect, controllers_1.deleteNote);
