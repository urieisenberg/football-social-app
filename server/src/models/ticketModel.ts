import { model, Schema, Model, Document } from 'mongoose';

export interface ITicket extends Document {
  user: {
    type: Schema.Types.ObjectId;
    ref: 'User';
    required: true;
  };
  subject: {
    type: string;
    required: true;
    enum: ['general', 'bug', 'feature', 'other'];
  };
  message: {
    type: string;
    required: true;
  };
  status: {
    type: string;
    required: true;
    enum: ['open', 'closed'];
  };
}

const ticketSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    subject: {
      type: String,
      required: true,
      enum: ['general', 'bug', 'feature', 'other'],
    },
    message: {
      type: String,
      required: true,
      min: 10,
      max: 500,
    },
    status: {
      type: String,
      required: true,
      enum: ['open', 'closed'],
    },
  },
  { timestamps: true }
);

export const Ticket = model<ITicket>('Ticket', ticketSchema);
