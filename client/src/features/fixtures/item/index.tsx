import { useParams } from 'react-router-dom';
import { useGetFixtureQuery } from '../api';
import { useToggle } from '../../../app/hooks';
import { FixtureEvents } from './events';
import {
  FixturesContainer,
  FixturesWrapper,
  FixturesHR,
  FixturesTitle,
  FixturesLink,
} from '../styles';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import { FixtureVenue } from './venue';
import { FixtureLeague } from './league';
import { FixtureDate } from './date';
import { FixtureLinks } from './links';
import { FixtureScore } from './score';
import { FixturePlayersStats } from './statistics/player';
import { FixtureLineups } from './lineups';
import { FixtureTeamStats } from './statistics/team';
import { SaveFavFixture } from '../../users/item/saveFixture';

export const FixturesItem = () => {
  const { fixture } = useParams();
  const {
    data: fixtureData,
    isLoading,
    isError,
    isSuccess,
  } = useGetFixtureQuery(fixture as string);
  const [showPlayers, togglePlayers] = useToggle(false);

  let content;
  if (isLoading || !fixtureData) content = <Loader />;
  else if (isError) content = <div>Something went wrong</div>;
  else if (isSuccess && fixtureData && fixtureData.fixture)
    content = (
      <FixturesWrapper>
        <Transition key={fixture + 'page'}>
          <SaveFavFixture
            fixture={{
              id: fixtureData.fixture.fixture.id,
              date: fixtureData.fixture.fixture.date,
              league: {
                id: fixtureData.fixture.league.id,
                logo: fixtureData.fixture.league.logo,
              },
              homeTeam: fixtureData.fixture.teams.home,
              awayTeam: fixtureData.fixture.teams.away,
            }}
          />
          <FixturesContainer>
            <FixtureLeague league={fixtureData.fixture.league} />
            <FixtureDate date={fixtureData.fixture.fixture.date} />
            <FixtureVenue
              leagueid={fixtureData.fixture.league.id}
              venue={fixtureData.fixture.fixture.venue}
            />
            <FixtureScore fixture={fixtureData.fixture} />
            <FixtureLinks fixture={fixtureData.fixture} />
            {fixtureData.fixture.fixture.status.short !== 'NS' && (
              <>
                {' '}
                <FixtureEvents
                  playersDataAvailable={fixtureData.playersDataAvailable}
                  homeTeam={fixtureData.homeEvents}
                  awayTeam={fixtureData.awayEvents}
                />
                <FixturesHR />
                <FixturesTitle>Players</FixturesTitle>
                {!showPlayers ? (
                  <>
                    <FixturesLink onClick={togglePlayers}>
                      Statistics
                    </FixturesLink>
                    <FixturePlayersStats
                      playersDataAvailable={fixtureData.playersDataAvailable}
                      homeTeam={fixtureData.players[0]}
                      awayTeam={fixtureData.players[0]}
                    />
                  </>
                ) : (
                  <>
                    <FixturesLink onClick={togglePlayers}>Lineups</FixturesLink>

                    <FixtureLineups
                      playersDataAvailable={fixtureData.playersDataAvailable}
                      homeTeam={fixtureData.lineup[0]}
                      awayTeam={fixtureData.lineup[1]}
                    />
                  </>
                )}
                <FixturesHR />
                <FixtureTeamStats
                  playersDataAvailable={fixtureData.playersDataAvailable}
                  homeTeam={fixtureData.statistics[0]}
                  awayTeam={fixtureData.statistics[1]}
                />
              </>
            )}
          </FixturesContainer>
        </Transition>
      </FixturesWrapper>
    );

  return <>{content}</>;
};
