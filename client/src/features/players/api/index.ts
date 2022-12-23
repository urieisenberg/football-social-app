import { footballApi } from '../../../app/services/football-api';
import {
  Player,
  TopPlayersRequest,
  SearchPlayerRequest,
  PlayerRequest,
  PlayerStatistics,
} from '../types';
import {
  transformPlayersResponse,
  transformPlayersSquadResponse,
  transformGetPlayersResponse,
} from '../utils/playersTransformResponse';

const URL = 'players';

export const playersApi = footballApi.injectEndpoints({
  endpoints: (build) => ({
    getSquad: build.query<Player[], number>({
      query: (teamid) => `${URL}/squad?team=${teamid}`,
      transformResponse: transformPlayersSquadResponse,
    }),
    getPlayer: build.query<PlayerStatistics, PlayerRequest>({
      query: ({ playerid, teamid }) =>
        `${URL}/player?player=${playerid}&team=${teamid}`,
      transformResponse: transformGetPlayersResponse,
    }),
    searchPlayers: build.query<PlayerStatistics[], SearchPlayerRequest>({
      query: ({ league, search }) =>
        `${URL}?league=${league}&search=${search}&season=2022`,
      transformResponse: transformPlayersResponse,
    }),
    getTopScorers: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topscorers?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
    }),
    getTopAssists: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topassists?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
    }),
    getTopRedCards: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topredcards?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
    }),
    getTopYellowCards: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topyellowcards?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
    }),
  }),
});

export const {
  useGetSquadQuery,
  useGetPlayerQuery,
  useSearchPlayersQuery,
  useGetTopScorersQuery,
  useGetTopAssistsQuery,
  useGetTopRedCardsQuery,
  useGetTopYellowCardsQuery,
} = playersApi;
