import { footballApi } from '../../../app/services/football-api';
import { TeamInfo } from '../types';
import { transformTeamInfoResponse } from '../utils/teamTransformResponse';

export const teamsApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeamInfo: builder.query<TeamInfo, string>({
      query: (teamid) => `teams?id=${teamid}`,
      transformResponse: transformTeamInfoResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetTeamInfoQuery } = teamsApi;
