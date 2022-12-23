import { Team } from '../../team/types';

export interface FixtureTeamStatistics {
  team: Team;
  statistics: [
    {
      type: 'Shots on Goal';
      value: number;
    },
    {
      type: 'Shots off Goal';
      value: number;
    },
    {
      type: 'Total Shots';
      value: number;
    },
    {
      type: 'Blocked Shots';
      value: number;
    },
    {
      type: 'Shots insidebox';
      value: number;
    },
    {
      type: 'Shots outsidebox';
      value: number;
    },
    {
      type: 'Fouls';
      value: number;
    },
    {
      type: 'Corner Kicks';
      value: number;
    },
    {
      type: 'Offsides';
      value: number;
    },
    {
      type: 'Ball Possession';
      value: number;
    },
    {
      type: 'Yellow Cards';
      value: number;
    },

    {
      type: 'Red Cards';
      value: number;
    },
    {
      type: 'Goalkeeper Saves';
      value: number;
    },

    {
      type: 'Total passes';
      value: number;
    },
    {
      type: 'Passes accurate';
      value: number;
    },
    {
      type: 'Passes %';
      value: number;
    }
  ];
}