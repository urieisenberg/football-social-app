import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers, { getState }) => {
      const user = (getState() as RootState).auth?.user;
      if (user) {
        headers.set('authorization', `Bearer ${user}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Ticket', 'User', 'Teams', 'Fixtures', 'Leagues', 'Post', 'Comment'],
  endpoints: (builder) => ({}),
});
