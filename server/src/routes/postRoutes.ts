import { Router } from 'express';
import { protect } from '../middleware/authMiddleware';
import {
  createPost,
  deletePost,
  getPosts,
  getUserPosts,
  getLikedPosts,
  getTeamPosts,
  updatePost,
  likePost,
  searchPosts,
  searchUserPosts,
} from '../controllers';
import { commentRoutes } from './commentRoutes';

const router = Router();

router.use('/:postId/comments', commentRoutes);

router.route('/').post(protect, createPost).get(protect, getPosts);

router.route('/search/:searchTerm?').get(protect, searchPosts);

router.route('/:id').put(protect, updatePost).delete(protect, deletePost);

router.route('/:id/like').put(protect, likePost);

router.route('/:username').get(protect, getUserPosts);

router
  .route('/:username/search/:searchTerm?')
  .get(protect, searchUserPosts);

router.route('/team/:teamname').get(protect, getTeamPosts);

router.route('/:username/liked').get(protect, getLikedPosts);

export { router as postRoutes };
