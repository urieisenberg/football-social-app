import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ticketsApi } from '../../app/services/tickets';
import { Ticket, TicketState } from '../../app/types';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    tickets: [],
    ticket: null,
  } as TicketState,
  reducers: {
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload;
    },
    removeTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },
  },
});

export const { setTickets, removeTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
