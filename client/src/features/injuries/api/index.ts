import { footballApi } from '../../../app/services/football-api';
import { Injury } from '../types';
import { getInjureiesTransformResponse } from '../utils/injuriesTransformResponse';

export const injuriesApi = footballApi.injectEndpoints({
  endpoints: (build) => ({
    getIjuriesByTeam: build.query<Injury[], string>({
      query: (teamid) => `injuries?team=${teamid}&season=2022`,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: getInjureiesTransformResponse,
    }),
    getIjuriesByLeague: build.query<Injury[], string>({
      query: (leagueid) => `injuries?league=${leagueid}&season=2022`,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: getInjureiesTransformResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetIjuriesByTeamQuery, useGetIjuriesByLeagueQuery } =
  injuriesApi;
