import { Player } from './Player';
import { Team } from '../../team/types';

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
  