export interface Ticket {
  id: number | string;
  user: number;
  subject: 'general' | 'bug' | 'feature' | 'other';
  message: string;
  status: 'open' | 'closed';
}

export interface TicketState {
  tickets: Ticket[];
  ticket: Ticket | null;
}

export interface CreateTicket {
  subject: 'general' | 'bug' | 'feature' | 'other';
  message: string;
  status: 'open';
}

export interface TicketsResponse {
  tickets: Ticket[];
}

// export interface UpdateTicket {
//   id: number;
//   subject: 'general' | 'bug' | 'feature' | 'other';
//   message: string;
//   status: 'open' | 'closed';
// }

export interface DeleteTicket {
  id: number;
}

export interface GetTicket {
  id: number;
}

export interface GetTickets {
  id: number;
  user: number;
}
