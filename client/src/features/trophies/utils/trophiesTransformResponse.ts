import { Trophy } from '../types';

export const transformTrophiesResponse = (response: any) => {
  return response.response as Trophy[];
};
