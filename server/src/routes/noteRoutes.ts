import { Router } from 'express';
import {
  createNote,
  updateNote,
  deleteNote,
  getNotes,
  deleteNotes,
} from '../controllers/noteController';
import { protect } from '../middleware/authMiddleware';

const router = Router({ mergeParams: true });

router
  .route('/')
  .post(protect, createNote)
  .get(protect, getNotes)
  .delete(protect, deleteNotes)
  .put(protect, updateNote);

router.route('/:noteId').delete(protect, deleteNote);

export { router as noteRoutes };
