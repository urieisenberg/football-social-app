export const transformPlayersResponse = (response: any) => {
  return response.response;
};

export const transformGetPlayersResponse = (response: any) => {
  return response.response[0];
};

export const transformGetSquadPlayersResponse = (response: any) => {
  return response.response[0].players;
};
