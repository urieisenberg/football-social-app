import { useParams } from 'react-router-dom';
import { useGetFixtureEventsQuery } from '../../api';
import { useNavigateToPlayer } from '../../../../routes/hooks';
import { Events } from '../../types';
import { filterEventsByTeam } from '../../utils/filterEventsByTeam';
import { Transition } from '../../../../components/Transition';
import { GiSoccerBall } from 'react-icons/gi';
import {
  EventsContainer,
  EventsTitle,
  EventsItem,
  EventsLine,
  EventsLink,
  EventsPlayer,
  EventsSubTitle,
  EventsRating,
} from '../../styles';

// interface FixtureEventsProps {
//   homeTeam: number;
//   awayTeam: number;
// }

interface FixtureEventsProps {
  homeTeam: Events[];
  awayTeam: Events[];
}

export const FixturesItemEvents = ({
  homeTeam,
  awayTeam,
}: FixtureEventsProps) => {
  // const { fixture } = useParams();
  // const { data, isLoading } = useGetFixtureEventsQuery(fixture as string);
  // const { navigateToPlayer } = useNavigateToPlayer();

  //   const { goals, cards, substitutions } = data

  // const { homeEvents, awayEvents } = filterEventsByTeam(
  //   data,
  //   homeTeam,
  //   awayTeam
  // );

  return <></>;
};
