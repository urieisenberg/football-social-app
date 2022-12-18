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

const router = Router();

router
    .route('/')
    .post(protect, createPost)
    .get(protect, getPosts)


router
    .route('/search/:searchTerm?')
    .get(protect, searchPosts)

router
    .route('/:id')
    .put(protect, updatePost)
    .delete(protect, deletePost)

router
    .route('/:id/like')
    .put(protect, likePost)

router
    .route(':username/posts')
    .get(protect, getUserPosts)

router
    .route(':username/posts/search/:searchTerm?')
    .get(protect, searchUserPosts)

router
    .route('/team')
    .get(protect, getTeamPosts)

router
    .route('/liked')
    .get(protect, getLikedPosts)

export { router as postRoutes };
    
