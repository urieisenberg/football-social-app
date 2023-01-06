import { Fixture, FixtureTeam } from './Fixture';
import { Events } from './Event';
import { FixtureTeamStatistics } from './TeamStatistics';
import { FixtureLineup } from './Lineup';
import { PlayerStatistics } from '../../players/types';
export interface FixtureTeamResponse {
  events: Events[];
  statistics: FixtureTeamStatistics[];
  lineup: FixtureLineup[];
  winner: boolean;
}

export interface FixtureResponse {
  fixture: Fixture;
  homeEvents: Events[];
  awayEvents: Events[];
  lineup: FixtureLineup[];
  statistics: FixtureTeamStatistics[];
  playersDataAvailable: boolean;
  players: PlayerStatistics;
}
