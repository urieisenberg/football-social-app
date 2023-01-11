import { Team, FavFixtures } from '../../../app/types';

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  team: Team;
  profilePicture: string;
  following: Array<string>;
  followers: Array<string>;
  favFixtures: Array<FavFixtures>;
  createdAt?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface UserState {
  user: User | null;
  following: Array<User>;
  followers: Array<User>;
  favFixtures: Array<FavFixtures>;
}

export interface RegisterUser extends LoginUser {
  username: string;
  team: {
    id: number;
    name: string;
    logo: string;
  };
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface FollowUser {
  userId: string;
  followingId: string;
}

export interface UpdateUser {
  username: string;
  email: string;
  password: string;
}
