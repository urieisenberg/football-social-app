import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://football-social-api.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        'Access-Control-Allow-Origin',
        'https://football-social-app.vercel.app/'
      );
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    'Auth',
    'Ticket',
    'Note',
    'User',
    'Teams',
    'Fixtures',
    'Leagues',
    'Post',
    'Comment',
  ],
  endpoints: (builder) => ({}),
});
