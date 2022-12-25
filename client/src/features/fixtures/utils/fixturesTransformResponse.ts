import { getPreviousRound } from './getPreviousRound';

export const transformGetFixturesResponse = (response: any): any => {
  return response.response;
};

export const transformCurrentRoundResponse = (response: any): any => {
  const previousRound = getPreviousRound(response.response[0]);
  return {
    currentRound: response.response[0],
    previousRound,
  };
};

// export const transformResponse = (response: any): any => {
//   const { data } = response;
//   const { fixtures } = data;
//   const transformedFixtures = fixtures.map((fixture: any) => {
//     const { awayTeam, homeTeam, league, date } = fixture;
//     const { name: awayTeamName, logo: awayTeamLogo } = awayTeam;
//     const { name: homeTeamName, logo: homeTeamLogo } = homeTeam;
//     const { name: leagueName, logo: leagueLogo } = league;
//     return {
//       awayTeamName,
//       awayTeamLogo,
//       homeTeamName,
//       homeTeamLogo,
//       leagueName,
//       leagueLogo,
//       date,
//     };
//   });
//   return transformedFixtures;
// };
