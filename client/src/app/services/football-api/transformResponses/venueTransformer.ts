import { Venue } from '../../../types';

export const transformVenueItemResponse = (response: any) => {
  return response.response[0] as Venue;
};

export const transformVenuesListResponse = (response: any) => {
  return response.response.filter((venue: Venue) => venue.capacity > 10000);
};

export const transformVenuesSearchedResponse = (response: any) => {
  return response.response.filter(
    (venue: Venue) => venue.country === 'Italy'
  ) as Venue[];
};
