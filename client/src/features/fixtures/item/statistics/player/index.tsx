import { useNavigateToPlayer } from '../../../../../routes/hooks';
import { FixturesPlayersStatistics } from '../../../types';
import { Transition } from '../../../../../components/Transition';
import { GiSoccerBall } from 'react-icons/gi';
import {
  EventsContainer,
  EventsItem,
  EventsLink,
  EventsPlayer,
} from '../../../styles';

interface FixturePlayersStatsProps {
  homeTeam: FixturesPlayersStatistics | undefined;
  awayTeam: FixturesPlayersStatistics| undefined;
  playersDataAvailable: boolean | undefined;
}

export const FixturePlayersStats = ({
  homeTeam,
  awayTeam,
  playersDataAvailable,
}: FixturePlayersStatsProps) => {
    const { navigateToPlayer } = useNavigateToPlayer();

    console.log(homeTeam, awayTeam);



  return <div>FixturePlayersStats</div>;
};
