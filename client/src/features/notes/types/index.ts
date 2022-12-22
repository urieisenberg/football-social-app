export interface Note {
  _id: string;
  user: string;
  ticket: string;
  text: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NoteState {
  notes: Note[];
  note: Note | null;
}

export interface GetNotes {
  ticketId: string;
}

export interface CreateNote {
  ticketId: string;
  text: string;
}

export interface DeleteNote {
  ticketId: string;
  noteId: string;
}

export interface NotesResponse {
  notes: Note[];
}
