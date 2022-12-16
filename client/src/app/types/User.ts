export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  profilePicture: string;
  follows: Array<string>;
  followers: Array<string>;
  favFixtures: Array<string>;
}

export interface AuthState {
  user: User | null;
  token: string | null;
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
