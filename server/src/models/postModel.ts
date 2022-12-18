import { model, Schema, Document } from 'mongoose';

export interface IPost extends Document {
  user: {
    type: Schema.Types.ObjectId;
    ref: 'User';
    required: true;
  };
  type: {
    type: string;
    required: true;
    enum: ['feed', 'team'];
  };
  text: {
    type: string;
    required: true;
  };
  username: {
    type: string;
    required: true;
  };
  pic: {
    type: string;
    required: true;
  };
  team: {
    type: string;
    required: true;
  };
  likes: Array<string>;
  comments: Array<string>;
}

const postSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['feed', 'team'],
    },
    text: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    username: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
    },
    comments: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>('Post', postSchema);
