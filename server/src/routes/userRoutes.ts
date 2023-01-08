import { Router } from 'express';
import { protect } from '../middleware/authMiddleware';
import {
  getUser,
  deleteUser,
  updateUser,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} from '../controllers';

const router = Router();

router.route('/').delete(protect, deleteUser).put(protect, updateUser);

router.route('/:username').get(protect, getUser);

router.route('/follow/:id').put(protect, followUser);

router.route('/unfollow/:id').put(protect, unfollowUser);

router.route('/:id/followers').get(protect, getFollowers);

router.route('/:id/following').get(protect, getFollowing);

export { router as userRoutes };
