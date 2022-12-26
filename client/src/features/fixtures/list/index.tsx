import { useParams } from 'react-router-dom';
import {
  useNavigateToVenue,
  useNavigateToTeam,
  useNavigateToHeadToHead,
  useNavigateToFixture,
} from '../../../app/hooks';
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
  const { teamid, teamname } = useParams();

  const { navigateToVenue } = useNavigateToVenue();
  const { navigateToTeam } = useNavigateToTeam();
  const { navigateToHeadToHead } = useNavigateToHeadToHead();
  const { navigateToFixture } = useNavigateToFixture();

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
                  <FixturesLink
                    onClick={() =>
                      navigateToTeam(
                        fixture.teams.home.id,
                        fixture.teams.home.name
                      )
                    }
                  >
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
                  <FixturesLink
                    onClick={() =>
                      navigateToTeam(
                        fixture.teams.away.id,
                        fixture.teams.away.name
                      )
                    }
                  >
                    <FixturesLogo
                      src={fixture.teams.away.logo}
                      alt={fixture.teams.away.name}
                    />
                    <FixturesBR />
                    {fixture.teams.away.name}
                  </FixturesLink>
                </FixturesTeam>
              </FixturesContent>
              <FixturesLink
                onClick={() =>
                  navigateToFixture(
                    teamid as string,
                    teamname as string,
                    fixture.fixture.id
                  )
                }
              >
                {' '}
                {/* navigate to fixture game zone */}
                Click to view game zone
              </FixturesLink>
              <FixturesLink
                onClick={() =>
                  navigateToHeadToHead(
                    teamid as string,
                    teamname as string,
                    fixture.teams.home.id,
                    fixture.teams.away.id,
                    fixture.teams.home.name,
                    fixture.teams.away.name
                  )
                }
              >
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
