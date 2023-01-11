import { League } from '../../../app/types';

export interface Standing {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  points: number;
  description: string;
  form: string;
  goalsDiff: number;
  update: string;
}

export interface Table {
  league: League;
  standings: Standing[];
}
