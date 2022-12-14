import { Router } from 'express';
import {
  createTicket,
  updateTicket,
  deleteTicket,
  getTicketById,
  getTickets,
} from '../controllers/ticketController';
import { protect } from '../middleware/authMiddleware';
import { noteRoutes } from './noteRoutes';

const router = Router();

router.use('/:ticketId/notes', noteRoutes);

router.route('/').post(protect, createTicket).get(protect, getTickets);
router
  .route('/:id')
  .put(protect, updateTicket)
  .delete(protect, deleteTicket)
  .get(protect, getTicketById);

export { router as ticketRoutes };
