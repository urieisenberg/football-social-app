import { api } from '.';
import { Ticket, CreateTicket, DeleteTicket, UpdateTicket } from '../../types';
import {
  setTickets,
  updateTicket,
  removeTicket,
} from '../../../features/tickets/ticketsSlice';
import { store } from '../../store';

const URL = '/tickets';

export const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query<Ticket[], number>({
      query: () => `${URL}`,
      providesTags: [{ type: 'Ticket', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setTickets(result.data));
      },
    }),
    getTicket: builder.query<Ticket, string>({
      query: (id) => `${URL}/${id}`,
      providesTags: [{ type: 'Ticket', id: 'LIST' }],
    }),
    createTicket: builder.mutation<Ticket, CreateTicket>({
      query: (body) => ({
        url: `${URL}`,
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
          url: `${URL}/${_id}`,
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
        url: `${URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Ticket', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(removeTicket(result.data as unknown as number));
      },
    }),
    closeTicket: builder.mutation<void, UpdateTicket>({
      query: ({ id }) => ({
        url: `${URL}/${id}/close`,
        method: 'PUT',
      }),
      invalidatesTags: [{ type: 'Ticket', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(updateTicket(result.data as unknown as Ticket));
      },
    }),
    deleteTickets: builder.mutation<void, void>({
      query: () => ({
        url: `${URL}`,
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
  useCloseTicketMutation,
} = ticketsApi;
