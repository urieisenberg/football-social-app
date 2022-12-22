import { footballApi } from '../../../app/services/football-api';
import { LeagueInfo, LeagueTable } from '../types';
import {
  transformCurrentLeagueResponse,
  transformLeagueInfoResponse,
  transformLeagueTableResponse,
} from '../utils/leagueTransformeResponse';

export const leaguesApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getLeague: builder.query<void, string>({
      query: (teamid) => `leagues?team=${teamid}`,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getLeagueInfo: builder.query<LeagueInfo, string>({
      query: (leagueid) => `leagues?id=${leagueid}`,
      transformResponse: transformLeagueInfoResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getCurrentLeague: builder.query<void, string>({
      query: (teamid) => `leagues?season=2022&team=${teamid}&type=league`,
      transformResponse: transformCurrentLeagueResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getLeagueTable: builder.query<LeagueTable, string>({
      query: (leagueid) => `standings?league=${leagueid}&season=2022`,
      transformResponse: transformLeagueTableResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useGetLeagueQuery,
  useGetLeagueInfoQuery,
  useGetCurrentLeagueQuery,
  useGetLeagueTableQuery,
} = leaguesApi;
