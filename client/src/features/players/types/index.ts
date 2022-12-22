import { Team } from '../../team/types';

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: number;
  injured: boolean;
  photo: string;
}

export interface TopScorers {
  player: Player;
  statistics: {
    team: Team;
    goals: {
      total: number;
    };
  };
}

export interface TopAssists {
  player: Player;
  statistics: {
    team: Team;
    goals: {
      assists: number;
    };
  };
}

export interface TopRedCards {
  player: Player;
  statistics: {
    team: Team;
    cards: {
      red: number;
    };
  };
}

export interface TopYellowCards {
  player: Player;
  statistics: {
    team: Team;
    cards: {
      yellow: number;
    };
  };
}
