"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const controllers_1 = require("../controllers");
const commentRoutes_1 = require("./commentRoutes");
const router = (0, express_1.Router)();
exports.postRoutes = router;
router.use('/:postId/comments', commentRoutes_1.commentRoutes);
router.route('/').post(authMiddleware_1.protect, controllers_1.createPost).get(authMiddleware_1.protect, controllers_1.getPosts);
router.route('/search/:searchTerm?').get(authMiddleware_1.protect, controllers_1.searchPosts);
router.route('/:id').put(authMiddleware_1.protect, controllers_1.updatePost).delete(authMiddleware_1.protect, controllers_1.deletePost);
router.route('/:id/like').put(authMiddleware_1.protect, controllers_1.likePost);
router.route('/:username').get(authMiddleware_1.protect, controllers_1.getUserPosts);
router
    .route('/:username/search/:searchTerm?')
    .get(authMiddleware_1.protect, controllers_1.searchUserPosts);
router.route('/team/:teamname').get(authMiddleware_1.protect, controllers_1.getTeamPosts);
router.route('/:username/liked').get(authMiddleware_1.protect, controllers_1.getLikedPosts);
