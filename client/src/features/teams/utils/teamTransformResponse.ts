import { TeamInfo } from '../types';

export const transformTeamInfoResponse = (response: any) => {
  return response.response[0] as TeamInfo;
};

export const transformTeamStatisticsResponse = (response: any) => {
  return response.response;
};
