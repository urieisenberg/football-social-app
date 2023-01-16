import { useNavigateToPlayer } from '../../../../routes/hooks';
import { handleEventIcon } from '../../utils/eventIcon';
import { Events } from '../../types';
import { Transition } from '../../../../components/Transition';
import {
  EventsContainer,
  EventsItem,
  EventsLink,
  EventsPlayer,
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

  let content;
  if (homeTeam === undefined || awayTeam === undefined) content = null;
  else if (homeTeam.length === 0 && awayTeam.length === 0) content = null;
  else
    content = (
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
                {handleEventIcon(
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
                {handleEventIcon(
                  event.type === 'Card' ? event.detail : event.type
                )}
              </EventsLink>
            </EventsPlayer>
          ))}
        </EventsItem>
      </EventsContainer>
    );
  return <Transition key="events">{content}</Transition>;
};
