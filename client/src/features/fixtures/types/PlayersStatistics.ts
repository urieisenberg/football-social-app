import { Team } from '../../team/types';

export interface FixturesPlayersStatistics {
  team: Team;
  players: [
    {
      player: {
        id: number;
        name: string;
        photo: string;
      };
      statistics: [
        {
          games: {
            minutes: number;
            number: number;
            position: string;
            rating: string;
            captain: boolean;
            substitute: boolean;
          };
          offsides: string | number;
          shots: {
            total: number;
            on: number;
          };
          goals: {
            total: number;
            conceded: number;
            assists: number;
            saves: number;
          };
          passes: {
            total: number;
            key: number;
            accuracy: string;
          };
          tackles: {
            total: number;
            blocks: number;
            interceptions: number;
          };
          duels: {
            total: number;
            won: number;
          };
          dribbles: {
            attempts: number;
            success: number;
            past: number;
          };
          fouls: {
            drawn: number;
            committed: number;
          };
          cards: {
            yellow: number;
            red: number;
          };
          penalty: {
            won: number;
            commited: number;
            scored: number;
            missed: number;

            saved: number;
          };
        }
      ];
    }
  ];
}
