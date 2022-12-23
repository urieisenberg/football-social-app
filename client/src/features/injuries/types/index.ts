import { Team, LeagueInfo } from '../../../app/types';

export interface Injuries {
  player: {
    id: number;
    name: string;
    photo: string;
    type: string;
    reason: string;
  };
  team: Team;
  fixture: {
    id: number;
    date: string;
    timestamp: number;
  };
  league: LeagueInfo;
}
