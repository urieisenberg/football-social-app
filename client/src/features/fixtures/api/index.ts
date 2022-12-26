import { footballApi } from '../../../app/services/football-api';
import {
  Fixture,
  CurrentFixtureRequest,
  Round,
  FixtureLineup,
  FixturesStatistics,
  FixtureEvents,
  FixturesPlayersStatistics,
} from '../../../app/types';
import {
  transformGetFixturesResponse,
  transformCurrentRoundResponse,
  transformEventsFixtureResponse,
  transformFixturesStatsResponse,
  transformFixtureResponse,
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
    getFixtureEvents: build.query<FixtureEvents, string>({
      query: (fixtureid) => `fixtures/events?fixture=${fixtureid}`,
      transformResponse: transformEventsFixtureResponse,
    }),
    getFixtureStatistics: build.query<FixturesStatistics, string>({
      query: (fixtureid) => `fixtures/statistics?fixture=${fixtureid}`,
      transformResponse: transformFixturesStatsResponse,
    }),
    getFixturePlayersStatistics: build.query<FixturesPlayersStatistics, string>(
      {
        query: (fixtureid) => `fixtures/players?fixture=${fixtureid}`,
        transformResponse: transformGetFixturesResponse,
      }
    ),
    getFixture: build.query<Fixture, string>({
      query: (fixtureid) => `fixtures?id=${fixtureid}`,
      transformResponse: transformFixtureResponse,
    }),
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
  useGetFixtureQuery,
} = fixturesApi;
