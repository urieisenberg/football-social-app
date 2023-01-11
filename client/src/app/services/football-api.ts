import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.REACT_APP_FOOTBALL_API_URL;
const API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST;
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    method: 'GET',
    prepareHeaders: (headers) => {
      API_HOST && headers.set('x-rapidapi-host', API_HOST);
      API_KEY && headers.set('x-rapidapi-key', API_KEY);
      return headers;
    },
  }),
  tagTypes: [
    'Team',
    'Fixture',
    'League',
    'Player',
    'Standings',
    'TopScorers',
    'Transfers',
    'Venue',
  ],
  endpoints: (builder) => ({}),
});
