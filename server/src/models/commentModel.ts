import { model, Schema, Document } from 'mongoose';

export interface IComment extends Document {
  user: {
    type: Schema.Types.ObjectId;
    ref: 'User';
    required: true;
  };
  post: {
    type: Schema.Types.ObjectId;
    ref: 'Post';
    required: true;
  };
  comment: {
    type: string;
    required: true;
  };
  pic: {
    type: string;
    required: true;
  };
  username: {
    type: string;
    required: true;
  };
}

const commentSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    comment: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    pic: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = model<IComment>('Comment', commentSchema);
