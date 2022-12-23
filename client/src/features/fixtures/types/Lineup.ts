import { Team } from '../../teams/types';

interface FixtureTeamColors {
  primary: string;
  number: string;
  border: string;
}

interface FixturePlayer {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string;
}

interface LineupTeam extends Team {
  colors: {
    player: FixtureTeamColors;
    goalkeeper: FixtureTeamColors;
  };
}

export interface FixtureLineup {
  team: LineupTeam;
  formation: string;
  startXI: [
    {
      player: FixturePlayer;
    }
  ];
  substitutes: [
    {
      player: FixturePlayer;
    }
  ];
  coach: {
    id: number;
    name: string;
    photo: string;
  };
}
