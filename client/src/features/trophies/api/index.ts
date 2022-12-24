import { footballApi } from '../../../app/services/football-api';
import { Trophy } from '../types';
import { transformTrophiesResponse } from '../utils/trophiesTransformResponse';

const URL = 'trophies';

export const trophiesApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerTrophies: builder.query<Trophy[], string>({
      query: (playerid) => `${URL}?player=${playerid}`,
      transformResponse: transformTrophiesResponse,
    }),
    getCoachTrophies: builder.query<Trophy[], string>({
      query: (coachid) => `${URL}?coach=${coachid}`,
      transformResponse: transformTrophiesResponse,
    }),
  }),
});

export const { useGetPlayerTrophiesQuery, useGetCoachTrophiesQuery } =
  trophiesApi;
