import { footballApi } from '.';
import { Team, TeamInfo } from '../../types';
import {
  transformTeamInfoResponse,
  transformTeamTransfersResponse,
  transformTeamCoachResponse,
  transformTeamCoachTrophiesResponse,
} from './transformResponses';

export const teamsApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeamInfo: builder.query<TeamInfo, string>({
      query: (teamid) => `teams?id=${teamid}`,
      transformResponse: transformTeamInfoResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTeamCoach: builder.query<Team, string>({
      query: (teamid) => `coachs?team=${teamid}`,
      transformResponse: transformTeamCoachResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTeamCoachTrophies: builder.query<Team, string>({
      query: (coach) => `trophies?coach=${coach}`,
      transformResponse: transformTeamCoachTrophiesResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useGetTeamInfoQuery,
  useGetTeamCoachQuery,
  useGetTeamCoachTrophiesQuery,
} = teamsApi;
