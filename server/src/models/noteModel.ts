import { Schema, model, Document } from 'mongoose';

export interface INote extends Document {
  user: {
    type: Schema.Types.ObjectId;
    ref: 'User';
    required: true;
  };
  ticket: {
    type: Schema.Types.ObjectId;
    ref: 'Ticket';
    required: true;
  };
  text: {
    type: string;
    required: true;
  };
}

const noteSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ticket: {
      type: Schema.Types.ObjectId,
      ref: 'Ticket',
      required: true,
    },
    text: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
  },
  { timestamps: true }
);

export const Note = model<INote>('Note', noteSchema);
