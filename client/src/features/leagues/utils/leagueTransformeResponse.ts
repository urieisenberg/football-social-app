import { LeagueInfo } from '../types';

export const transformLeagueInfoResponse = (response: any) => {
  return response.response[0] as LeagueInfo;
};

export const transformCurrentLeagueResponse = (response: any) => {
  return response.response[0].league.id;
};

