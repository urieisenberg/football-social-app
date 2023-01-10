"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoutes = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)({ mergeParams: true });
exports.commentRoutes = router;
router.route('/').post(authMiddleware_1.protect, controllers_1.createComment);
router
    .route('/:commentId')
    .put(authMiddleware_1.protect, controllers_1.updateComment)
    .delete(authMiddleware_1.protect, controllers_1.deleteComment);
