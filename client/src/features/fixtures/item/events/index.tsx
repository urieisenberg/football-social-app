import { useNavigateToPlayer } from '../../../../routes/hooks';
import { Events } from '../../types';
import { Transition } from '../../../../components/Transition';
import { GiSoccerBall } from 'react-icons/gi';
import {
  EventsContainer,
  EventsItem,
  EventsLink,
  EventsPlayer,
  FixturesHR,
} from '../../styles';

interface FixtureEventsProps {
  homeTeam: Events[] | undefined;
  awayTeam: Events[] | undefined;
  playersDataAvailable: boolean | undefined;
}

export const FixtureEvents = ({
  homeTeam,
  awayTeam,
  playersDataAvailable,
}: FixtureEventsProps) => {
  const { navigateToPlayer } = useNavigateToPlayer();
  console.log(homeTeam, awayTeam);

  const handleEventsIcon = (type: string) => {
    switch (type) {
      case 'Goal':
        return <GiSoccerBall />;
      case 'Yellow Card':
        return '🟨';
      case 'Red Card':
        return '🟥';
      case 'Substitution':
        return '🔄';
    }
  };

  let content;
  if (homeTeam === undefined || awayTeam === undefined) content = null;
  else if (homeTeam.length === 0 && awayTeam.length === 0) content = null;
  else
    content = (
      <>
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
                  {handleEventsIcon(
                    event.type === 'Card' ? event.detail : event.type
                  )}
                </EventsLink>
              </EventsPlayer>
            ))}
          </EventsItem>
          <EventsPlayer></EventsPlayer>
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
                  {handleEventsIcon(
                    event.type === 'Card' ? event.detail : event.type
                  )}
                </EventsLink>
              </EventsPlayer>
            ))}
          </EventsItem>
        </EventsContainer>
        <FixturesHR />
      </>
    );
  return <Transition key="events">{content}</Transition>;
};
