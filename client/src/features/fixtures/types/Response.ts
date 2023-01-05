import { Fixture } from './Fixture';
import { Events } from './Event';
import { FixtureTeamStatistics } from './TeamStatistics';
import { FixtureLineup } from './Lineup';
import { League } from '../../leagues/types';


export interface FixtureResponse {
  homeTeam: FixtureTeamResponse;
  awayTeam: FixtureTeamResponse;
  fixture: Fixture;
  league: League;
  playersDataAvailable: boolean;
}

export interface FixtureTeamResponse {
  cards: Events[];
  goals: Events[];
  substitutions: Events[];
  statistics: FixtureTeamStatistics[];
  lineup: FixtureLineup[];
  winner: boolean;
}
