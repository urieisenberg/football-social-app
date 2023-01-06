import { useParams } from 'react-router-dom';
import { useGetFixtureQuery } from '../api';
import { FixtureEvents } from './events';
import { FixturesContainer, FixturesWrapper, FixturesHR } from '../styles';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import { FixtureVenue } from './venue';
import { FixtureLeague } from './league';
import { FixtureDate } from './date';
import { FixtureLinks } from './links';
import { FixtureScore } from './score';
import { FixturePlayersStats } from './statistics/player';

export const FixturesItem = () => {
  const { fixture } = useParams();
  const {
    data: fixtureData,
    isLoading,
    isError,
    isSuccess,
  } = useGetFixtureQuery(fixture as string);
  console.log(fixtureData);
  let content;
  if (isLoading || !fixtureData) content = <Loader />;
  else if (isError) content = <div>Something went wrong</div>;
  else if (isSuccess && fixtureData && fixtureData.fixture)
    content = (
      <FixturesWrapper>
        <Transition key={fixture + 'page'}>
          <FixturesContainer>
            <FixtureLeague league={fixtureData.fixture.league} />
            <FixtureDate date={fixtureData.fixture.fixture.date} />
            <FixtureVenue
              leagueid={fixtureData.fixture.league.id}
              venue={fixtureData.fixture.fixture.venue}
            />
            <FixtureScore fixture={fixtureData.fixture} />
            <FixtureLinks fixture={fixtureData.fixture} />
            <FixtureEvents
              playersDataAvailable={fixtureData.playersDataAvailable}
              homeTeam={fixtureData.homeEvents}
              awayTeam={fixtureData.awayEvents}
            />
            <FixturesHR />
            {/* <FixturePlayersStats
              playersDataAvailable={fixtureData.playersDataAvailable}
              homeTeam={fixtureData.statistics[0]}
              awayTeam={fixtureData.statistics[0]}
            /> */}
          </FixturesContainer>
        </Transition>
      </FixturesWrapper>
    );

  return <>{content}</>;
};
