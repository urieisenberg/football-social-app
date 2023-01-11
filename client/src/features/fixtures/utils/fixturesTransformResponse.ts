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

  const homeEvents = data.events.filter(
    (event: any) => event.team.id === data.teams.home.id
  );

  const goalsHome = homeEvents.filter((event: any) => event.type === 'Goal');
  const cardsHome = homeEvents.filter((event: any) => event.detail === 'Red Card');
  const substitutionsHome = homeEvents.filter(
    (event: any) => event.type === 'Subst'
  );

  const awayEvents = data.events.filter(
    (event: any) => event.team.id === data.teams.away.id
  );

  const goalsAway = awayEvents.filter((event: any) => event.type === 'Goal');
  const cardsAway = awayEvents.filter((event: any) => event.detail === 'Red Card');
  const substitutionsAway = awayEvents.filter(
    (event: any) => event.type === 'Subst'
  );

  return {
    fixture,
    playersDataAvailable,
    awayEvents: goalsAway
      .concat(cardsAway, substitutionsAway)
      .sort((a: any, b: any) => a.time.elapsed - b.time.elapsed),
    homeEvents: goalsHome
      .concat(cardsHome, substitutionsHome)
      .sort((a: any, b: any) => a.time.elapsed - b.time.elapsed),
    statistics: data.statistics,
    lineup: data.lineups,
    players: data.players,
  };
};

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
