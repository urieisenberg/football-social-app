import { footballApi } from '../../../app/services/football-api';
import { Coach } from '../types';
import { transformCoacByIdResponse, transformCoachResponse } from '../utils/coachTransformeResponse';

const URL = 'coachs';

export const coachApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoachById: builder.query<Coach, string>({
      query: (coachid) => `${URL}?id=${coachid}`,
      transformResponse: transformCoacByIdResponse
    }),
    getCoachByTeam: builder.query<Coach[], string>({
      query: (teamid) => `${URL}?team=${teamid}`,
      transformResponse: transformCoachResponse
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoachByIdQuery, useGetCoachByTeamQuery } = coachApi;
