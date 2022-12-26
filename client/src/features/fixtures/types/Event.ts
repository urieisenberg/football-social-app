import { Team } from '../../teams/types';

export interface Events {
  time: {
    elapsed: number;
    extra: number;
  };
  team: Team;
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number;
    name: string;
  };
  type: string;
  detail: string;
  comments: string;
}

export interface FixtureEvents {
  goals: Events[];
  cards: Events[];
  substitutions: Events[];
}
