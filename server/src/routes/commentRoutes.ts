import { Router } from 'express';
import { protect } from '../middleware/authMiddleware';
import { createComment, updateComment, deleteComment } from '../controllers';

const router = Router({ mergeParams: true });

router.route('/').post(protect, createComment);

router
  .route('/:commentId')
  .put(protect, updateComment)
  .delete(protect, deleteComment);

export { router as commentRoutes };
