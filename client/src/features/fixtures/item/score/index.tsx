import { useNavigateToTeam } from '../../../../routes/hooks';
import { Fixture } from '../../types';
import {
  FixturesScore,
  FixturesTeam,
  FixturesLink,
  FixturesLogo,
  FixturesContent,
  FixturesBR,
  FixturesGoals,
} from '../../styles';
import { FixturesCountdown } from '../../countdown';

interface FixtureScoreProps {
  fixture: Fixture;
}

export const FixtureScore = ({ fixture }: FixtureScoreProps) => {

  const { navigateToTeam } = useNavigateToTeam();

  return (
    <FixturesContent>
      <FixturesTeam>
        <FixturesLink
          onClick={() =>
            navigateToTeam(fixture.teams.home.id, fixture.teams.home.name)
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
            navigateToTeam(fixture.teams.away.id, fixture.teams.away.name)
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
  );
};
