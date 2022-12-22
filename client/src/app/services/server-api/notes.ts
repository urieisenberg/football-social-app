import { api } from '.';
import { Note, CreateNote, DeleteNote, GetNotes } from '../../types/Note';
import { store } from '../../store';
import {
  setNotes,
  updateNote,
  removeNote,
} from '../../actions/noteSlice';

export const notesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query<Note[], GetNotes>({
      query: ({ ticketId }) => `/tickets/${ticketId}/notes`,
      providesTags: [{ type: 'Note', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setNotes(result.data));
      },
    }),
    createNote: builder.mutation<Note, CreateNote>({
      query: ({ ticketId, text }) => ({
        url: `/tickets/${ticketId}/notes`,
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: [
        { type: 'Note', id: 'LIST' },
        {
          type: 'Ticket',
          id: 'LIST',
        },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setNotes([...store.getState().note.notes, result.data]));
      },
    }),
    updateNote: builder.mutation<Note, CreateNote>({
      query: ({ ticketId, ...patch }) => ({
        url: `/notes/${ticketId}/notes`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: [
        { type: 'Note', id: 'LIST' },
        {
          type: 'Ticket',
          id: 'LIST',
        },
      ],
      async onQueryStarted(
        { ticketId, ...patch },
        { dispatch, queryFulfilled }
      ) {
        const result = await queryFulfilled;
        dispatch(updateNote(result.data as unknown as Note));
      },
    }),
    deleteNote: builder.mutation<Note, DeleteNote>({
      query: ({ ticketId, noteId }) => ({
        url: `/tickets/${ticketId}/notes/${noteId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Note', id: 'LIST' },
        {
          type: 'Ticket',
          id: 'LIST',
        },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(removeNote(result.data as unknown as number));
      },
    }),
  }),
});

export const {
  useGetNotesQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApi;
