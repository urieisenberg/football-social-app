import { footballApi } from '../../../app/services/football-api';
import { TeamInfo, TeamStatistics } from '../types';
import {
  transformTeamInfoResponse,
  transformTeamStatisticsResponse,
} from '../utils/teamTransformResponse';
import { setTeam } from '../teamSlice';

export const teamsApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeamInfo: builder.query<TeamInfo, string>({
      query: (teamid) => `teams?id=${teamid}`,
      transformResponse: transformTeamInfoResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setTeam(result.data));
      },
    }),
    getTeamStatistics: builder.query<
      TeamStatistics[],
      { teamid: string; leagueid: string }
    >({
      query: ({ teamid, leagueid }) =>
        `teams/statistics?league=${leagueid}&id=${teamid}&season=2022`,
      transformResponse: transformTeamStatisticsResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetTeamInfoQuery, useGetTeamStatisticsQuery } = teamsApi;
