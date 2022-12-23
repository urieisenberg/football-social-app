import { footballApi } from '../../../app/services/football-api';
import { Coach } from '../types';
import { transformCoachResponse } from '../utils/coachTransformeResponse';

const URL = 'coachs';

export const coachApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoachById: builder.query<Coach, number>({
      query: (id) => `${URL}?id=${id}`,
      transformResponse: (response, meta, arg) =>
        transformCoachResponse(response, meta, arg),
    }),
    getCoachByTeam: builder.query<Coach, number>({
      query: (id) => `${URL}?team=${id}`,
      transformResponse: (response, meta, arg) =>
        transformCoachResponse(response, meta, arg),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoachByIdQuery, useGetCoachByTeamQuery } = coachApi;
