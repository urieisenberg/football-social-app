import { LeagueInfo, LeagueTable } from '../../../types';

export const transformLeagueInfoResponse = (response: any) => {
  return response.response[0] as LeagueInfo;
};

export const transformCurrentLeagueResponse = (response: any) => {
  return response.response[0].league.id;
};

export const transformLeagueTableResponse = (response: any) => {
  return {
    league: response.response[0].league,
    standings: response.response[0].league.standings[0],
  };
};
