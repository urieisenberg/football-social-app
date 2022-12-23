import { Player, League, Team } from '../../../app/types';

export interface PlayerStatistics {
  player: Player;
  statistics: Statistics[];
}

export interface Statistics {
  team: Team;
  league: League;
  games: GameStatistics;
  substitutes: {
    in: number;
    out: number;
    bench: number;
  };
  shots: {
    total: number;
    on: number;
  };
  goals: {
    total: number;
    conceded: number;
    assists: number;
    saves: number;
  };
  passes: {
    total: number;
    key: number;
    accuracy: string;
  };
  tackles: {
    total: number;
    blocks: number;
    interceptions: number;
  };
  duels: {
    total: number;
    won: number;
  };
  dribbles: {
    attempts: number;
    success: number;
    past: number;
  };
  fouls: {
    drawn: number;
    committed: number;
  };
  cards: {
    yellow: number;
    red: number;
  };
  penalty: {
    won: number;
    commited: number;
    scored: number;
    missed: number;
    saved: number;
  };
}

export interface GameStatistics {
  appearance: number;
  minutes: number;
  position: string;
  rating: string;
  captain: boolean;
  lineups: number;
}
