import { useParams } from 'react-router-dom';
import { FixturesItemEvents } from './events';
import {
  useNavigateToVenue,
  useNavigateToTeam,
  useNavigateToHeadToHead,
} from '../../../routes/hooks';
import { useGetFixtureStatisticsQuery, useGetFixtureQuery } from '../api';
import {
  FixturesContainer,
  FixturesContent,
  FixturesDate,
  FixturesLeague,
  FixturesWrapper,
  FixturesVenue,
  FixturesLink,
  FixturesTeam,
  FixturesLogo,
  FixturesBR,
  FixturesScore,
  FixturesGoals,
  FixturesH2H,
  FixturesHR,
} from '../styles';
import { FixturesCountdown } from '../countdown';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';

export const FixturesItem = () => {
  const { fixture } = useParams();
  // const { data, isLoading } = useGetFixtureStatisticsQuery(fixture as string);
  // console.log(data);

  // const { homeTeam, awayTeam } = data || {};

  const {
    data: fixtureData,
    isLoading,
    isError,
  } = useGetFixtureQuery(fixture as string);
  console.log(fixtureData);

  const { navigateToVenue } = useNavigateToVenue();
  const { navigateToTeam } = useNavigateToTeam();
  const { navigateToHeadToHead } = useNavigateToHeadToHead();

  const referee = fixtureData?.fixture.referee;
  const venue = fixtureData?.fixture.venue.name;

  let content;
  if (isError || fixtureData === undefined || fixtureData.fixture === undefined)
    content = <div>Something went wrong</div>;
  else if (isLoading) content = <Loader />;
  else
    content = (
      <FixturesWrapper>
        <Transition key={fixture + 'page'}>
          <FixturesContainer>
            <FixturesLeague>
              {fixtureData.league.name + ' ' + fixtureData.league.round}
            </FixturesLeague>
            {/* <FixturesDate>
              {new Date(fixtureData.fixture.fixture.date).toLocaleString()}
            </FixturesDate> */}
            <FixturesLeague>
              Referee: {referee ? referee : 'TBD'}
            </FixturesLeague>
            <FixturesContent>
              <FixturesLink>
                <FixturesVenue
                  onClick={() =>
                    navigateToVenue(
                      fixtureData.league.id,
                      fixtureData.fixture.venue.id
                    )
                  }
                >
                  {venue ? venue : 'TBD'}
                </FixturesVenue>
              </FixturesLink>
              <FixturesTeam>
                <FixturesLink
                  onClick={() =>
                    navigateToTeam(
                      fixtureData.fixture.teams?.home.id,
                      fixtureData.fixture.teams?.home.name
                    )
                  }
                >
                  <FixturesLogo
                    src={fixtureData.fixture.teams?.home.logo}
                    alt={fixtureData.fixture.teams?.home.name}
                  />
                  <FixturesBR />
                  {fixtureData.fixture.teams?.home.name}
                </FixturesLink>
              </FixturesTeam>
              <FixturesScore>
                {fixtureData.fixture.status.short === 'NS' ||
                fixtureData.fixture.status.short === 'TBD' ? (
                  <FixturesCountdown date={fixtureData.fixture.date} />
                ) : (
                  <FixturesGoals>
                    {fixtureData.fixture.goals?.home +
                      ' - ' +
                      fixtureData.fixture.goals?.away}
                  </FixturesGoals>
                )}
              </FixturesScore>
              <FixturesTeam>
                <FixturesLink
                  onClick={() =>
                    navigateToTeam(
                      fixtureData.fixture.teams?.away.id,
                      fixtureData.fixture.teams?.away.name
                    )
                  }
                >
                  <FixturesLogo
                    src={fixtureData.fixture.teams?.away.logo}
                    alt={fixtureData.fixture.teams?.away.name}
                  />
                  <FixturesBR />

                  {fixtureData.fixture.teams?.away.name}
                </FixturesLink>
              </FixturesTeam>
            </FixturesContent>
            {/* <FixturesLink
              onClick={() =>
                navigateToHeadToHead(
                  fixtureData.fixture.teams.home.id as unknown as string,
                  fixtureData.fixture.teams.away.id as unknown as string,
                  fixtureData.fixture.teams.home.id,
                  fixtureData.fixture.teams.away.id,
                  fixtureData.fixture.teams.home.name,
                  fixtureData.fixture.teams.away.name
                )
              }
            >
              <FixturesH2H>
                Click to see more games between{' '}
                {fixtureData.fixture.teams.home.name} and{' '}
                {fixtureData.fixture.teams.away.name}
              </FixturesH2H>
            </FixturesLink> */}
            <FixturesHR />
            <FixturesItemEvents
              homeTeam={fixtureData.homeTeam.events}
              awayTeam={fixtureData.awayTeam.events}
              playersDataAvailable={fixtureData.playersDataAvailable}
            />
          </FixturesContainer>
        </Transition>
      </FixturesWrapper>
    );

  return <>{content}</>;
};
