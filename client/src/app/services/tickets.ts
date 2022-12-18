import { api } from './api';
import { Ticket, CreateTicket, DeleteTicket } from '../types';
import {
  setTickets,
  updateTicket,
  removeTicket,
} from '../../features/tickets/ticketsSlice';
import { store } from '../store';

export const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query<Ticket[], number>({
      query: () => `/tickets`,
      providesTags: [{ type: 'Ticket', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setTickets(result.data));
      },
    }),
    getTicket: builder.query<Ticket, string>({
      query: (id) => `/tickets/${id}`,
      providesTags: [{ type: 'Ticket', id: 'LIST' }],
    }),
    createTicket: builder.mutation<Ticket, CreateTicket>({
      query: (body) => ({
        url: '/tickets',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Ticket', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setTickets([...store.getState().ticket.tickets, result.data]));
      },
    }),
    updateTicket: builder.mutation<void, Pick<Ticket, '_id'> & Partial<Ticket>>(
      {
        query: ({ _id, ...patch }) => ({
          url: `/tickets/${_id}`,
          method: 'PUT',
          body: patch,
        }),
        invalidatesTags: [{ type: 'Ticket', id: 'LIST' }], 
        async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
          const result = await queryFulfilled;
          dispatch(updateTicket(result.data as unknown as Ticket));
        },
      }
    ),
    deleteTicket: builder.mutation<void, DeleteTicket>({
      query: ({ id }) => ({
        url: `/tickets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Ticket', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(removeTicket(result.data as unknown as number));
      },
    }),
    deleteTickets: builder.mutation<void, void>({
      query: () => ({
        url: '/tickets',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Ticket', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation,
  useDeleteTicketsMutation,
} = ticketsApi;
