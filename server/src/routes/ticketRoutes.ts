import { Router } from 'express';
import {
  createTicket,
  updateTicket,
  deleteTicket,
  getTicketById,
  getTickets,
  closeTicket,
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

router.route('/:id/close').put(protect, closeTicket);

export { router as ticketRoutes };
