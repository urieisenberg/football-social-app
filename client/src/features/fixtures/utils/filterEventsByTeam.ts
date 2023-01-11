import { FixtureEvents } from '../types';

export const filterEventsByTeam = (
  events: FixtureEvents | undefined,
  homeTeamId: number,
  awayTeamId: number
): { homeEvents: FixtureEvents | {}; awayEvents: FixtureEvents | {} } => {
  if (!events) return { homeEvents: {}, awayEvents: {} };
  const homeEvents = {
    goals:
      events && events.goals.filter((event) => event.team.id === homeTeamId),
    cards: events.cards.filter((event) => event.team.id === homeTeamId),
    substitutions: events.substitutions.filter(
      (event) => event.team.id === homeTeamId
    ),
  };
  const awayEvents = {
    goals: events.goals.filter((event) => event.team.id === awayTeamId),
    cards: events.cards.filter((event) => event.team.id === awayTeamId),
    substitutions: events.substitutions.filter(
      (event) => event.team.id === awayTeamId
    ),
  };
  return { homeEvents, awayEvents };
};
