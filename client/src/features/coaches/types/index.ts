import { Team } from '../../team/types';

export interface Coach {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: number;
  photo: string;
  team: Team;
  career: {
    team: Team;
  };
  start: string;
  end: string;
}

export interface CoachTrophies {
  league: string;
  season: string;
  country: string;
  place: string;
}
