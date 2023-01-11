import { Team } from './Team';
import { League } from '../../leagues/types';

export interface TeamStatistics {
  team: Team;
  league: League;
  form: string;
  fixtures: TeamFixturesStatistics;
  goals: TeamGoalsStatistics;
  biggest: TeamBiggestStatistics;
  cleanSheets: TeamCleanSheetStatistics;
  failedToScore: TeamFailedToScoreStatistics;
  penalties: TeamPenaltyStatistics;
}

interface TeamFixturesStatistics {
  played: {
    home: number;
    away: number;
    total: number;
  };
  wins: {
    home: number;
    away: number;
    total: number;
  };
  draws: {
    home: number;
    away: number;
    total: number;
  };
  losses: {
    home: number;
    away: number;
    total: number;
  };
}

interface TeamGoalsStatistics {
  for: {
    total: {
      home: number;
      away: number;
      total: number;
    };
    average: {
      home: number;
      away: number;
      total: number;
    };
  };
  against: {
    total: {
      home: number;
      away: number;
      total: number;
    };
    average: {
      home: number;
      away: number;
      total: number;
    };
  };
}

interface TeamBiggestStatistics {
  win: {
    home: string;
    away: string;
  };
  loss: {
    home: string;
    away: string;
  };
  goals: {
    for: {
      home: string;
      away: string;
    };
    against: {
      home: string;
      away: string;
    };
  };
}

interface TeamCleanSheetStatistics {
  home: number;
  away: number;
  total: number;
}

interface TeamFailedToScoreStatistics extends TeamCleanSheetStatistics {}

interface TeamPenaltyStatistics {
  scored: {
    total: number;
    percentage: string;
  };
  missed: {
    total: number;
    percentage: string;
  };
  total: number;
}
