import { useNavigateToPlayer } from '../../../../../routes/hooks';
import { FixturesPlayersStatistics } from '../../../types';
import { handleEventIcon } from '../../../utils/eventIcon';
import { Transition } from '../../../../../components/Transition';
import {
  EventsContainer,
  EventsItem,
  EventsPlayer,
  EventsRating,
  EventsLink,
} from '../../../styles';

interface FixturePlayersStatsProps {
  homeTeam: FixturesPlayersStatistics | undefined;
  awayTeam: FixturesPlayersStatistics | undefined;
  playersDataAvailable: boolean | undefined;
}

export const FixturePlayersStats = ({
  homeTeam,
  awayTeam,
  playersDataAvailable,
}: FixturePlayersStatsProps) => {
  const { navigateToPlayer } = useNavigateToPlayer();

  const handleIcons = (type: string, number: number) => {
    for (let i = 0; i < number; i++) {
      return handleEventIcon(type);
    }
  };

  let content;
  if (!homeTeam || !awayTeam) content = null;
  else
    content = (
      <EventsContainer>
        <EventsItem>
          {homeTeam.players.map((p) => (
            <EventsLink key={p.player.id}>
              <EventsPlayer
                onClick={() =>
                  playersDataAvailable &&
                  navigateToPlayer(
                    homeTeam.team.id,
                    homeTeam.team.name,
                    p.player.id
                  )
                }
              >
                <EventsRating>{p.statistics[0].games.rating}</EventsRating>
                {p.player.name}
                <></>
                {handleIcons('Red Card', p.statistics[0].cards.red)}
                {handleIcons('Yellow Card', p.statistics[0].cards.yellow)}
                {handleIcons('Goal', p.statistics[0].goals.total)}
                {handleIcons('Foul', p.statistics[0].fouls.committed)}
                {handleIcons('Saved', p.statistics[0].goals.saves)}
              </EventsPlayer>
            </EventsLink>
          ))}
        </EventsItem>
        <EventsPlayer></EventsPlayer>
        <EventsItem>
          {awayTeam.players.map((p) => (
            <EventsLink key={p.player.id}>
              <EventsPlayer
                onClick={() =>
                  playersDataAvailable &&
                  navigateToPlayer(
                    awayTeam.team.id,
                    awayTeam.team.name,
                    p.player.id
                  )
                }
              >
                <EventsRating>{p.statistics[0].games.rating}</EventsRating>
                {p.player.name}
                <></>
                {handleIcons('Red Card', p.statistics[0].cards.red)}
                {handleIcons('Yellow Card', p.statistics[0].cards.yellow)}
                {handleIcons('Goal', p.statistics[0].goals.total)}
                {handleIcons('Foul', p.statistics[0].fouls.committed)}
                {handleIcons('Saved', p.statistics[0].goals.saves)}
              </EventsPlayer>
            </EventsLink>
          ))}
        </EventsItem>
      </EventsContainer>
    );

  return <Transition key="players stats">{content}</Transition>;
};
