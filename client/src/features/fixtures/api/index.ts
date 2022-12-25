import { footballApi } from '../../../app/services/football-api';
import { Fixture, CurrentFixtureRequest } from '../../../app/types';
import {
  transformGetFixturesResponse,
  transformCurrentRoundResponse,
} from '../utils/fixturesTransformResponse';
import { date } from '../utils/getCurrentDate';

export const fixturesApi = footballApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentRound: build.query<string[], string>({
      query: (leagueid) =>
        `fixtures/rounds?league=${leagueid}&season=2022&current=true`,
      transformResponse: transformCurrentRoundResponse,
    }),
    getCurrentFixtures: build.query<Fixture[], CurrentFixtureRequest>({
      query: ({ leagueid, round }) =>
        `fixtures?league=${leagueid}&season=2022&round=${round}`,
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
  }),
  overrideExisting: false,
});

export const {
  useGetCurrentRoundQuery,
  useGetCurrentFixturesQuery,
  useGetTeamNextFixturesQuery,
  useGetTeamPreviousFixturesQuery,
  useGetHeadToHeadQuery,
} = fixturesApi;
