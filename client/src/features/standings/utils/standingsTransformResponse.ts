export const transformStandingsResponse = (response: any) => {
    return {
      league: response.response[0].league,
      standings: response.response[0].league.standings[0],
    };
  };
  