import { Team } from '../../teams/types';

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
  career: CoachCareer[];
}

export interface CoachCareer {
  start: string;
  end: string;
  team: Team;
}
