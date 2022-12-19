import { footballApi } from '.';
import { Venue } from '../../types';

const URL = 'venues';

export const venuesApi = footballApi.injectEndpoints({
  endpoints: (builder) => ({
    getVenues: builder.query<void, Venue>({
      query: ({ country }) => `${URL}?country=${country}`,
      providesTags: ['Venue'],
      transformResponse: (response, meta, arg) => {
        const { data } = response as { data: Venue[] };
        data.filter((venue) => venue.capacity > 10000);
      },
    }),
    getVenue: builder.query<void, Venue>({
      query: ({ id }) => `${URL}?id=${id}`,
    }),
    searchVenues: builder.query<void, Venue>({
      query: ({ searchTerm }) => `${URL}?search=${searchTerm}`,
      transformResponse: (response, meta, arg) => {
        const { data } = response as { data: Venue[] };
        data.filter((venue) => venue.country === 'Italy');
      },
    }),
  }),
});

export const { useGetVenuesQuery, useGetVenueQuery, useSearchVenuesQuery } =
  venuesApi;
