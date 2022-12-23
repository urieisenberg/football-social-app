import { Team } from '../../team/types';

export interface FixtureEvent {
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
