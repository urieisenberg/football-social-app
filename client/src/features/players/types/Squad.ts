import { Team } from '../../teams/types';

export interface SquadPlayer {
  id: number;
  name: string;
  age: number;
  position: string;
  number: number;
  photo: string;
}

export interface Squad {
  team: Team;
  players: SquadPlayer[];
}
