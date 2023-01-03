import { useNavigateToPlayer } from '../../../../routes/hooks';
import { Events } from '../../types';
import { Transition } from '../../../../components/Transition';
import { GiSoccerBall } from 'react-icons/gi';
import {
  EventsContainer,
  EventsItem,
  EventsLink,
  EventsPlayer,
} from '../../styles';

interface FixtureEventsProps {
  homeTeam: Events[];
  awayTeam: Events[];
  playersDataAvailable: boolean;
}

export const FixturesItemEvents = ({
  homeTeam,
  awayTeam,
  playersDataAvailable,
}: FixtureEventsProps) => {
  const { navigateToPlayer } = useNavigateToPlayer();

  const handleEventsIcon = (type: string) => {
    switch (type) {
      case 'Goal':
        return <GiSoccerBall />;
      case 'Yellow card':
        return '🟨';
      case 'Red card':
        return '🟥';
      case 'Substitution':
        return '🔄';
    }
  };

  let content;
  if (homeTeam.length === 0 && awayTeam.length === 0) content = null;
  else
    content = (
      <Transition key="events">
        <EventsContainer>
          <EventsItem>
            {homeTeam.map((event) => (
              <EventsPlayer key={event.time.elapsed}>
                <EventsLink
                  onClick={() =>
                    playersDataAvailable &&
                    navigateToPlayer(
                      event.team.id,
                      event.team.name,
                      event.player.id
                    )
                  }
                >
                  {event.player.name + ' (' + event.time.elapsed + ') '}
                  {handleEventsIcon(event.type)}
                </EventsLink>
              </EventsPlayer>
            ))}
          </EventsItem>
        </EventsContainer>
        <EventsContainer></EventsContainer>
        <EventsContainer>
          <EventsItem>
            {awayTeam.map((event) => (
              <EventsPlayer key={event.time.elapsed}>
                <EventsLink
                  onClick={() =>
                    playersDataAvailable &&
                    navigateToPlayer(
                      event.team.id,
                      event.team.name,
                      event.player.id
                    )
                  }
                >
                  {event.player.name + ' (' + event.time.elapsed + ') '}
                  {handleEventsIcon(event.type)}
                </EventsLink>
              </EventsPlayer>
            ))}
          </EventsItem>
        </EventsContainer>
      </Transition>
    );

  return <>{content}</>;
};
