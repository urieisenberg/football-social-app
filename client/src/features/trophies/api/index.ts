import { footballApi } from '../../../app/services/football-api';
import { Trophy } from '../types';
import { transformTrophiesResponse } from '../utils/trophiesTransformResponse';

const URL = 'trophies';

export const trophiesApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlayerTrophies: builder.query<Trophy[], number>({
      query: (id) => `${URL}?player=${id}`,
      transformResponse: transformTrophiesResponse,
    }),
    getCoachTrophies: builder.query<Trophy[], number>({
      query: (id) => `${URL}?coach=${id}`,
      transformResponse: transformTrophiesResponse,
    }),
  }),
});

export const { useGetPlayerTrophiesQuery, useGetCoachTrophiesQuery } =
  trophiesApi;
