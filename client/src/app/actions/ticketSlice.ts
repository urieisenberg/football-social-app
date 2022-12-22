import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticket, TicketState, UpdateTicket } from '../types';

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
    setTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.push(action.payload);
    },
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const { id, ticket } = action.payload as unknown as UpdateTicket;
      const index = state.tickets.findIndex((ticket) => ticket._id === id);
      if (index >= 0) {
        state.tickets[index] = { ...state.tickets[index], ...ticket };
      }
    },
    removeTicket: (state, action: PayloadAction<number>) => {
      const index = state.tickets.findIndex(
        (ticket) => ticket._id === action.payload
      );
      if (index >= 0) {
        state.tickets.splice(index, 1);
      }
    },
  },
});

export const { setTicket, setTickets, updateTicket, removeTicket } =
  ticketSlice.actions;
export default ticketSlice.reducer;
