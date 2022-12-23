import { LeagueInfo, Team } from '../../../app/types';

interface FixtureTeam extends Team {
  winner: boolean;
}

interface HomeAway {
  home: number;
  away: number;
}

export interface Fixture {
  fixture: {
    id: number;
    referee: string;
    date: string;
    timestamp: number;
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
  };
  league: LeagueInfo;
  teams: {
    home: FixtureTeam;
    away: FixtureTeam;
  };
  goals: HomeAway;
  score: {
    halftime: HomeAway;
    fulltime: HomeAway;
    extratime: HomeAway;
    penalty: HomeAway;
  };
}
