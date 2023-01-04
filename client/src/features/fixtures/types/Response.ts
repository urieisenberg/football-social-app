import { Fixture } from './Fixture';
import { Events } from './Event';
import { FixtureEvents } from './Event';
import { League } from '../../leagues/types';

export interface FixtureItem {
  fixture: Fixture;
  league: League;
  goals: Events[];
  cards: Events[];
  substitutions: Events[];
}

export interface FixtureResponse {
  homeTeam: Events[];
  awayTeam: Events[];
  playersDataAvailable: boolean;
}
