import { footballApi } from '.';
import { Venue } from '../../types';
import {
  transformVenueItemResponse,
  transformVenuesListResponse,
  transformVenuesSearchedResponse,
} from './transformResponses';

const URL = 'venues';

export const venuesApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getVenues: builder.query<Venue[], string>({
      query: (country) => `${URL}?country=${country}`,
      transformResponse: transformVenuesListResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getVenue: builder.query<Venue, string>({
      query: (venueid) => `${URL}?id=${venueid}`,
      transformResponse: transformVenueItemResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    searchVenues: builder.query<Venue[], string>({
      query: (searchTerm) => `${URL}?search=${searchTerm}`,
      transformResponse: transformVenuesSearchedResponse,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetVenuesQuery, useGetVenueQuery, useSearchVenuesQuery } =
  venuesApi;
