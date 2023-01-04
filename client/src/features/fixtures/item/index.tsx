import { useParams } from 'react-router-dom';
import { FixturesItemEvents } from './events';
import { useGetFixtureStatisticsQuery, useGetFixtureQuery } from '../api';

export const FixturesItem = () => {
  const { fixture } = useParams();
  // const { data, isLoading } = useGetFixtureStatisticsQuery(fixture as string);
  // console.log(data);

  // const { homeTeam, awayTeam } = data || {};

  const { data: fixtureData, isLoading } = useGetFixtureQuery(
    fixture as string
  );
  console.log(fixtureData);

  return (
    <div>
      {/* <FixturesItemEvents
        homeTeam={fixtureData?.homeTeam}
        awayTeam={fixtureData?.awayTeam}
        playersDataAvailable={fixtureData?.playersDataAvailable}
      /> */}
      {/* <FixturesItemEvents homeTeam={} awayTeam={121} /> */}
    </div>
  );
};
