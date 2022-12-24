export interface Trophy {
  league: string;
  season: string;
  country: string;
  place: string;
}

export interface TrophiesListProps {
  trophies: Trophy[];
}
