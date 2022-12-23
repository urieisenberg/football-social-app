import { Team, League } from '../../../app/types';

export interface Injury {
  player: {
    id: number;
    name: string;
    photo: string;
    type: string;
    reason: ['Injury', 'Red Card', 'Suspended', 'Yellow Cards'];
  };
  team: Team;
  fixture: {
    id: number;
    date: string;
    timestamp: number;
  };
  league: League;
}
