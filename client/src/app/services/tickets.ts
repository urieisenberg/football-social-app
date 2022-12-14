import { api } from './api';
import {
  Ticket,
  TicketState,
  CreateTicket,
  DeleteTicket,
  GetTicket,
  TicketsResponse,
} from '../types';

export const ticketsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query<TicketsResponse, void>({
      query: () => '/tickets',
      providesTags: (result) =>
        result
          ? [
              ...result.tickets.map(({ id }) => ({
                type: 'Ticket' as const,
                id,
              })),
            ]
          : [{ type: 'Ticket', id: 'LIST' }],
    }),
    getTicket: builder.query<Ticket, string>({
      query: (id) => `/tickets/${id}`,
      providesTags: (result, error, id) => [{ type: 'Ticket', id }],
    }),
    createTicket: builder.mutation<Ticket, CreateTicket>({
      query: (body) => ({
        url: '/tickets',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Ticket', id: 'LIST' }],
    }),
    updateTicket: builder.mutation<void, Pick<Ticket, 'id'> & Partial<Ticket>>({
      query: ({ id, ...patch }) => ({
        url: `/tickets/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          ticketsApi.util.updateQueryData(
            'getTicket',
            id as string,
            (draft) => {
              if (draft) {
                Object.assign(draft, patch);
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Ticket', id }],
    }),
    deleteTicket: builder.mutation<void, DeleteTicket>({
      query: ({ id }) => ({
        url: `/tickets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Ticket', id }],
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
