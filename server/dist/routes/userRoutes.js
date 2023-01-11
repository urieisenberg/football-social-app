"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.userRoutes = router;
router.route('/').delete(authMiddleware_1.protect, controllers_1.deleteUser).put(authMiddleware_1.protect, controllers_1.updateUser);
router.route('/:username').get(authMiddleware_1.protect, controllers_1.getUser);
router.route('/follow/:id').put(authMiddleware_1.protect, controllers_1.followUser);
router.route('/unfollow/:id').put(authMiddleware_1.protect, controllers_1.unfollowUser);
router.route('/:id/followers').get(authMiddleware_1.protect, controllers_1.getFollowers);
router.route('/:id/following').get(authMiddleware_1.protect, controllers_1.getFollowing);
router
    .route('/:id/fixtures')
    .get(authMiddleware_1.protect, controllers_1.getFavFixtures)
    .delete(authMiddleware_1.protect, controllers_1.deleteFavFixture)
    .put(authMiddleware_1.protect, controllers_1.saveFavFixtures);
