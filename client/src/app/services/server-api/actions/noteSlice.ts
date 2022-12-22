import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteState, CreateNote } from '../../../types';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
    note: null,
  } as NoteState,
  reducers: {
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    setNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const { ticketId: id, text } = action.payload as unknown as CreateNote;
      const index = state.notes.findIndex((note) => note._id === id);
      if (index >= 0) {
        state.notes[index] = { ...state.notes[index], text };
      }
    },
    removeNote: (state, action: PayloadAction<number>) => {
      const index = state.notes.findIndex(
        (note) => note._id === (action.payload as unknown as string)
      );
      if (index >= 0) {
        state.notes.splice(index, 1);
      }
    },
  },
});

export const { setNote, setNotes, updateNote, removeNote } = noteSlice.actions;

export default noteSlice.reducer;
