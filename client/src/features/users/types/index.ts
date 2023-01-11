import { Team } from '../../teams/types';

export interface FavFixtures {
  id: number;
  date: string;
  league: {
    id: number;
    logo: string;
  };
  homeTeam: Team;
  awayTeam: Team;
}
