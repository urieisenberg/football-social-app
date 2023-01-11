import { footballApi } from '../../../app/services/football-api';
import { Table } from '../types';
import { transformStandingsResponse } from '../utils/standingsTransformResponse';

const URL = 'standings';

export const standingsApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getStandingsByLeague: builder.query<Table, string>({
      query: (leagueid) => `${URL}?league=${leagueid}&season=2022`,
      transformResponse: transformStandingsResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getStandingsByTeam: builder.query<Table, string>({
      query: (teamid) => `${URL}?team=${teamid}&season=2022`,
      transformResponse: transformStandingsResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getStandingsByTeamAndSeason: builder.query<
      Table,
      { teamid: number; season: number }
    >({
      query: ({ teamid, season }) => `${URL}?team=${teamid}&season=${season}`,
      transformResponse: transformStandingsResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getStandingsByLeagueAndSeason: builder.query<
      Table,
      { leagueid: number; season: number }
    >({
      query: ({ leagueid, season }) =>
        `${URL}?league=${leagueid}&season=${season}`,
      transformResponse: transformStandingsResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useGetStandingsByLeagueQuery,
  useGetStandingsByTeamQuery,
  useGetStandingsByTeamAndSeasonQuery,
  useGetStandingsByLeagueAndSeasonQuery,
} = standingsApi;
