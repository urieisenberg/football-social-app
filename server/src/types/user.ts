import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  team: {
    name: string;
    id: number;
    logo: string;
  };
  follows: Array<string>;
  followers: Array<string>;
  favFixtures: Array<string>;
}
