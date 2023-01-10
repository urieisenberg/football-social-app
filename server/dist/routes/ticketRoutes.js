"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketRoutes = void 0;
const express_1 = require("express");
const ticketController_1 = require("../controllers/ticketController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const noteRoutes_1 = require("./noteRoutes");
const router = (0, express_1.Router)();
exports.ticketRoutes = router;
router.use('/:ticketId/notes', noteRoutes_1.noteRoutes);
router.route('/').post(authMiddleware_1.protect, ticketController_1.createTicket).get(authMiddleware_1.protect, ticketController_1.getTickets);
router
    .route('/:id')
    .put(authMiddleware_1.protect, ticketController_1.updateTicket)
    .delete(authMiddleware_1.protect, ticketController_1.deleteTicket)
    .get(authMiddleware_1.protect, ticketController_1.getTicketById);
router.route('/:id/close').put(authMiddleware_1.protect, ticketController_1.closeTicket);
