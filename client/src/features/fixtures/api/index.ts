import { footballApi } from '../../../app/services/football-api';
import {
  Fixture,
  CurrentFixtureRequest,
  Round,
  FixtureLineup,
  FixtureTeamStatistics,
  FixtureEvent,
  FixturesPlayersStatistics,
} from '../../../app/types';
import {
  transformGetFixturesResponse,
  transformCurrentRoundResponse,
} from '../utils/fixturesTransformResponse';
import { date } from '../utils/getCurrentDate';

export const fixturesApi = footballApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentRound: build.query<Round, string>({
      query: (leagueid) =>
        `fixtures/rounds?league=${leagueid}&season=2022&current=true`,
      transformResponse: transformCurrentRoundResponse,
    }),
    getCurrentFixtures: build.query<Fixture[], CurrentFixtureRequest>({
      query: ({ leagueid, round }) =>
        `fixtures?league=${leagueid}&season=2022&round=${round}`,
      transformResponse: transformGetFixturesResponse,
    }),
    getTeamNextFixtures: build.query<Fixture[], string>({
      query: (teamid) => `fixtures?team=${teamid}&next=50`,
      transformResponse: transformGetFixturesResponse,
    }),
    getTeamPreviousFixtures: build.query<Fixture[], string>({
      query: (teamid) =>
        `fixtures?season=2022&team=${teamid}&status=ft&from=2022-08-13&to=${date}`,
      transformResponse: transformGetFixturesResponse,
    }),
    getHeadToHead: build.query<Fixture[], string>({
      query: (teamids) => `fixtures/headtohead?h2h=${teamids}`,
      transformResponse: transformGetFixturesResponse,
    }),
    getFixtureLineups: build.query<FixtureLineup, string>({
      query: (fixtureid) => `fixtures/lineups?fixture=${fixtureid}`,
      transformResponse: transformGetFixturesResponse,
    }),
    getFixtureEvents: build.query<FixtureEvent[], string>({
      query: (fixtureid) => `fixtures/events?fixture=${fixtureid}`,
      transformResponse: transformGetFixturesResponse,
    }),
    getFixtureStatistics: build.query<FixtureTeamStatistics, string>({
      query: (fixtureid) => `fixtures/statistics?fixture=${fixtureid}`,
      transformResponse: transformGetFixturesResponse,
    }),
    getFixturePlayersStatistics: build.query<FixturesPlayersStatistics, string>(
      {
        query: (fixtureid) => `fixtures/players?fixture=${fixtureid}`,
        transformResponse: transformGetFixturesResponse,
      }
    ),
  }),
  overrideExisting: false,
});

export const {
  useGetCurrentRoundQuery,
  useGetCurrentFixturesQuery,
  useGetTeamNextFixturesQuery,
  useGetTeamPreviousFixturesQuery,
  useGetHeadToHeadQuery,
  useGetFixtureLineupsQuery,
  useGetFixtureEventsQuery,
  useGetFixtureStatisticsQuery,
  useGetFixturePlayersStatisticsQuery,
} = fixturesApi;
