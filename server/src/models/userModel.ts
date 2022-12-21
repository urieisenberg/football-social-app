import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  team: {
    name: string;
    id: number;
    logo: string;
  };
  following: Array<string>;
  followers: Array<string>;
  favFixtures: Array<string>;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    team: {
      type: Object,
      required: true,
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    favFixtures: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);

