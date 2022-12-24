export interface TopPlayersRequest {
  league: string;
  season: number;
}

export interface PlayerRequest {
  playerid: string;
  teamid: string;
}

export interface SearchPlayerRequest {
  league: string;
  search: string;
}
