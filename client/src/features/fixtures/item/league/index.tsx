import { League } from '../../../leagues/types';
import { useNavigateToLeague } from '../../../../routes/hooks';
import { FixturesLeague, FixturesLink } from '../../styles';

interface FixtureLeagueProps {
  league: League;
}

export const FixtureLeague = ({ league }: FixtureLeagueProps) => {
  const { navigateToLeague } = useNavigateToLeague();

  return (
    <FixturesLink>
      <FixturesLeague onClick={() => navigateToLeague(league.id)}>
        {league.name + ' ' + league.round + ' - ' + league.season}
      </FixturesLeague>
    </FixturesLink>
  );
};
