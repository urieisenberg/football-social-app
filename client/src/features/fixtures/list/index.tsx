import { useNavigateToVenue } from '../../../app/hooks';
import { Fixture } from '../types';
import {
  FixturesWrapper,
  FixturesContainer,
  FixturesLeague,
  FixturesDate,
  FixturesContent,
  FixturesVenue,
  FixturesTeam,
  FixturesLogo,
  FixturesBR,
  FixturesLink,
  FixturesH2H,
  FixturesHR,
  FixturesScore,
  FixturesGoals,
} from '../styles';
import { Transition } from '../../../components/Transition';
import { FixturesCountdown } from '../countdown';
import { TopButton } from '../../../components/Button';

interface FixturesListProps {
  fixtures: Fixture[];
}

export const FixturesList = ({ fixtures }: FixturesListProps) => {
  console.log(fixtures);

  const { navigateToVenue } = useNavigateToVenue();

  return (
    <FixturesWrapper>
      <FixturesContainer>
        {fixtures.map((fixture, index) => (
          <Transition key={fixture.fixture.id}>
            <FixturesContainer>
              <FixturesLeague>
                {fixture.league.name + ' ' + fixture.league.round}
              </FixturesLeague>
              <FixturesDate>
                {new Date(fixture.fixture.date).toLocaleDateString()}
              </FixturesDate>
              <FixturesContent>
                <FixturesLink>
                  <FixturesVenue
                    onClick={() =>
                      navigateToVenue(
                        fixture.league.id,
                        fixture.fixture.venue.id
                      )
                    }
                  >
                    {fixture.fixture.venue.name +
                      ' ' +
                      fixture.fixture.venue.city}
                  </FixturesVenue>
                </FixturesLink>
              </FixturesContent>
              <FixturesContent>
                <FixturesTeam>
                  <FixturesLink>
                    {' '}
                    {/* navigate to team */}
                    <FixturesLogo
                      src={fixture.teams.home.logo}
                      alt={fixture.teams.home.name}
                    />
                    <FixturesBR />
                    {fixture.teams.home.name}
                  </FixturesLink>
                </FixturesTeam>
                <FixturesScore>
                  {fixture?.fixture.status.short === 'NS' ||
                  fixture?.fixture.status.short === 'TBD' ? (
                    <FixturesCountdown date={fixture.fixture.date} />
                  ) : (
                    <FixturesGoals>
                      {fixture.goals.home + ' - ' + fixture.goals.away}
                    </FixturesGoals>
                  )}
                </FixturesScore>
                <FixturesTeam>
                  <FixturesLink>
                    {' '}
                    {/* navigate to team */}
                    <FixturesLogo
                      src={fixture.teams.away.logo}
                      alt={fixture.teams.away.name}
                    />
                    <FixturesBR />
                    {fixture.teams.away.name}
                  </FixturesLink>
                </FixturesTeam>
              </FixturesContent>
              <FixturesLink>
                {' '}
                {/* navigate to fixture game zone */}
                Click to view game zone
              </FixturesLink>
              <FixturesLink>
                {' '}
                {/* navigate to fixture head to head */}
                <FixturesH2H>
                  Click to see more games between {fixture.teams.home.name} and{' '}
                  {fixture.teams.away.name}
                </FixturesH2H>
              </FixturesLink>
              <FixturesHR />
              {index === fixtures.length - 1 && <TopButton />}
            </FixturesContainer>
          </Transition>
        ))}
      </FixturesContainer>
    </FixturesWrapper>
  );
};
