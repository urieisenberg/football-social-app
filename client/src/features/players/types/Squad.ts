import { Team } from '../../team/types';

interface SquadPlayer {
  id: number;
  name: string;
  age: number;
  position: string;
  photo: string;
}

export interface Squad {
  team: Team;
  players: SquadPlayer[];
}
