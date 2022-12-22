export const SERIA_A = '135';

export interface LeagueInfo {
  country: {
    flag: string;
    name: string;
  };
  league: {
    id: number;
    logo: string;
    name: string;
  };
}

export interface LeagueTableInfo {
  id: number;
  name: string;
  logo: string;
  flag: string;
  season: number;
  country: string;
}

export interface LeagueTableStandings {
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

export interface LeagueTable {
  league: LeagueTableInfo;
  standings: LeagueTableStandings[];
}
