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

export interface League {
  id: number;
  name: string;
  logo: string;
  flag: string;
  season: number;
  country: string;
}
