import { footballApi } from '../../../app/services/football-api';
import {
  TopPlayersRequest,
  SearchPlayerRequest,
  PlayerRequest,
  PlayerStatistics,
  SquadPlayer,
} from '../types';
import {
  transformGetSquadPlayersResponse,
  transformPlayersResponse,
  transformGetPlayersResponse,
} from '../utils/playersTransformResponse';

const URL = 'players';

export const playersApi = footballApi.injectEndpoints({
  endpoints: (build) => ({
    getSquad: build.query<SquadPlayer[], string>({
      query: (teamid) => `${URL}/squads?team=${teamid}`,
      transformResponse: transformGetSquadPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPlayer: build.query<PlayerStatistics, PlayerRequest>({
      query: ({ playerid, teamid }) =>
        `${URL}/player?player=${playerid}&team=${teamid}`,
      transformResponse: transformGetPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    searchPlayers: build.query<PlayerStatistics[], SearchPlayerRequest>({
      query: ({ league, search }) =>
        `${URL}?league=${league}&search=${search}&season=2022`,
      transformResponse: transformPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopScorers: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topscorers?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopAssists: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topassists?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopRedCards: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topredcards?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopYellowCards: build.query<PlayerStatistics[], TopPlayersRequest>({
      query: ({ league, season }) =>
        `${URL}/topyellowcards?league=${league}&season=${season}`,
      transformResponse: transformPlayersResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
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
