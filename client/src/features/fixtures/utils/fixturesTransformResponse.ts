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
