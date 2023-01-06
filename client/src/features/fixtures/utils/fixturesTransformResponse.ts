import { getPreviousRound } from './getPreviousRound';

export const transformGetFixturesResponse = (response: any): any => {
  return response.response;
};

export const transformFixtureResponse = (response: any): any => {
  const data = response.response[0];
  const fixture = {
    fixture: data.fixture,
    league: data.league,
    teams: data.teams,
    goals: data.goals,
    score: data.score,
  };

  const playersDataAvailable = data.fixture.date.includes('2022');

  const homeEvents = data.events
    .filter((event: any) => event.team.id === data.teams.home.id)
    .sort((a: any, b: any) => a.time.elapsed - b.time.elapsed);

  const goalsHome = homeEvents.filter((event: any) => event.type === 'Goal');
  const cardsHome = homeEvents.filter((event: any) => event.type === 'Card');
  const substitutionsHome = homeEvents.filter(
    (event: any) => event.type === 'Subst'
  );

  const awayEvents = data.events
    .filter((event: any) => event.team.id === data.teams.away.id)
    .sort((a: any, b: any) => a.time.elapsed - b.time.elapsed);

  const goalsAway = awayEvents.filter((event: any) => event.type === 'Goal');
  const cardsAway = awayEvents.filter((event: any) => event.type === 'Card');
  const substitutionsAway = awayEvents.filter(
    (event: any) => event.type === 'Subst'
  );

  return {
    fixture,
    playersDataAvailable,
    awayEvents: goalsAway.concat(cardsAway, substitutionsAway),
    homeEvents: goalsHome.concat(cardsHome, substitutionsHome),
    statistics: data.statistics,
    lineup: data.lineups,
    players: data.players,
  };
};

// export const transformFixtureResponse = (response: any): any => {
//   const data = response.response[0];
//   const homeEvents = data.events.filter(
//     (event: any) => event.team.id === data.teams.home.id
//   );

//   const goalsHome = homeEvents.filter((event: any) => event.type === 'Goal');
//   const cardsHome = homeEvents.filter((event: any) => event.type === 'Card');
//   const substitutionsHome = homeEvents.filter(
//     (event: any) => event.type === 'Subst'
//   );

//   const awayEvents = data.events.filter(
//     (event: any) => event.team.id === data.teams.away.id
//   );

//   const goalsAway = awayEvents.filter((event: any) => event.type === 'Goal');
//   const cardsAway = awayEvents.filter((event: any) => event.type === 'Card');
//   const substitutionsAway = awayEvents.filter(
//     (event: any) => event.type === 'Subst'
//   );

//   const homeLineups = data.lineups.filter(
//     (lineup: any) => lineup.team.id === data.teams.home.id
//   );

//   const awayLineups = data.lineups.filter(
//     (lineup: any) => lineup.team.id === data.teams.away.id
//   );

//   const homeStatistics = data.statistics.filter(
//     (statistic: any) => statistic.team.id === data.teams.home.id
//   );

//   const awayStatistics = data.statistics.filter(
//     (statistic: any) => statistic.team.id === data.teams.away.id
//   );

//   const playersDataAvailable = data.fixture.date.includes('2022');

//   const homeTeam = {
//     ...data.teams.home,
//     events: goalsHome.concat(cardsHome, substitutionsHome),
//     lineup: homeLineups,
//     statistics: homeStatistics,
//   };

//   const awayTeam = {
//     ...data.teams.away,
//     events: goalsAway.concat(cardsAway, substitutionsAway),
//     lineup: awayLineups,
//     statistics: awayStatistics,
//   };

//   return {
//     fixture: data.fixture,
//     league: data.league,
//     homeTeam,
//     awayTeam,
//     playersDataAvailable,
//   };
// };

export const transformCurrentRoundResponse = (response: any): any => {
  const previousRound = getPreviousRound(response.response[0]);
  return {
    currentRound: response.response[0],
    previousRound,
  };
};

export const transformEventsFixtureResponse = (response: any): any => {
  const goals = response.response.filter((event: any) => event.type === 'Goal');
  const cards = response.response.filter((event: any) => event.type === 'Card');
  const substitutions = response.response.filter(
    (event: any) => event.type === 'Subst'
  );
  return {
    goals,
    cards,
    substitutions,
  };
};

export const transformFixturesStatsResponse = (response: any): any => {
  return {
    homeTeam: response.response[0],
    awayTeam: response.response[1],
  };
};
