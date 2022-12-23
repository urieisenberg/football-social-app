import { Player, PlayerStatistics } from '../types';

export const transformPlayersSquadResponse = (response: any) => {
  return response.response[0] as Player[];
};

export const transformPlayersResponse = (response: any) => {
  console.log(response.response);
  return response.response;
};

export const transformGetPlayersResponse = (response: any) => {
  return response.response[0] as PlayerStatistics;
};
