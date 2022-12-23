export interface TopPlayersRequest {
  league: string;
  season: number;
}

export interface PlayerRequest {
  playerid: number;
  teamid: number;
}

export interface SearchPlayerRequest {
  league: string;
  search: string;
}
