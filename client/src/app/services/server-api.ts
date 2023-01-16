import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const URL = process.env.REACT_APP_FOOTBALL_API_SERVER;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}/api`,
    prepareHeaders: (headers, { getState }) => {
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
