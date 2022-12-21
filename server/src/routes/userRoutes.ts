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

router
  .route('/')
  .get(protect, getUser)
  .delete(protect, deleteUser)
  .put(protect, updateUser);

router.route('/follow/:id').put(protect, followUser);

router.route('/unfollow/:id').put(protect, unfollowUser);

router.route('/followers/:id').get(protect, getFollowers);

router.route('/following/:id').get(protect, getFollowing);

export { router as userRoutes };
