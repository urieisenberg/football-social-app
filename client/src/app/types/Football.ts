export const SERIA_A = '135';

export interface Venue {
  id: string;
  country: string;
  capacity: number;
  searchTerm?: string;
}

export interface LeagueById {
  leagueid: string;
}

export interface LeagueByTeam {
  teamid: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
