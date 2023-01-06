import { useParams, useNavigate } from 'react-router-dom';
import { Fixture } from '../../types';
import { FixturesHR, FixturesLink, FixturesH2H } from '../../styles';
import {
  useNavigateToHeadToHead,
  useNavigateToFixture,
} from '../../../../routes/hooks';

interface FixtureLinksProps {
  fixture: Fixture;
}

export const FixtureLinks = ({ fixture }: FixtureLinksProps) => {
  const { teamid, teamname, leagueid, fixture: fixtureid } = useParams();
  const navigate = useNavigate();
  const { navigateToHeadToHead } = useNavigateToHeadToHead();
  const { navigateToFixture } = useNavigateToFixture();

  const navToGameZone = () =>
    leagueid
      ? navigate(`/league/${leagueid}/fixtures/${fixture.fixture.id}`)
      : navigateToFixture(
          teamid as string,
          teamname as string,
          fixture.fixture.id
        );

  return (
    <>
     {!fixtureid && <FixturesLink onClick={navToGameZone}>
        Click to view game zone
      </FixturesLink>}
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
    </>
  );
};
