import { Team } from '../../teams/types';

export interface Transfer {
  player: {
    id: number;
    name: string;
  };
  update: string;
  transfers: [
    {
      date: string;
      type: string;
      teams: {
        out: Team;
        in: Team;
      };
    }
  ];
}

export interface TransfersListProps {
  transfers: Transfer;
}
