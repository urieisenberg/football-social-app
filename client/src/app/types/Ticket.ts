import { Note } from './Note';

export interface Ticket {
  _id: number | string;
  user: number;
  subject: 'general' | 'bug' | 'feature' | 'other';
  message: string;
  status: 'open' | 'closed';
  createdAt: string;
  updatedAt?: string;
  notes?: Note[];
}

export interface TicketState {
  tickets: Ticket[];
  ticket: Ticket | null;
}

export interface CreateTicket {
  subject: 'general' | 'bug' | 'feature' | 'other';
  message: string;
}

export interface TicketsResponse {
  tickets: Ticket[];
}

export interface UpdateTicket {
  id: number;
  ticket?: Ticket;
}

export interface CloseTicket {
  id: number;
}

export interface DeleteTicket {
  id: number;
}

export interface GetTickets {
  id: number;
  user: number;
}
