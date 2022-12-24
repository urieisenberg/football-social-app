import { useNavigateToPlayer } from '../../../app/hooks';
import { PlayerStatistics } from '../types';
import { TopButton } from '../../../components/Button';
import { Card } from '../../../components/Card';
import {
  PlayersContainer,
  PlayersTitle,
  PlayersListContainer,
} from '../styles';

interface PlayersListProps {
  data: PlayerStatistics[];
  title: string;
}

export const PlayersList = ({ data, title }: PlayersListProps) => {
  const { navigateToPlayer } = useNavigateToPlayer();

  let content;
  if (data.length === 0)
    content = (
      <PlayersContainer>
        <PlayersTitle>{title}</PlayersTitle>
        No Players Found
      </PlayersContainer>
    );
  else
    content = (
      <PlayersContainer>
        <PlayersTitle>{title}</PlayersTitle>
        <PlayersListContainer>
          {data.map((player) => (
            <Card
              key={player.player.id}
              player={player}
              image={player.player.photo}
              name={player.player.name}
              team={player.statistics[0].team}
              type={
                title.includes('Red')
                  ? player.statistics[0].cards.red + ' 🟥'
                  : title.includes('Yellow')
                  ? player.statistics[0].cards.yellow + ' 🟨'
                  : title.includes('Scorers')
                  ? player.statistics[0].goals.total + ' Goals'
                  : title.includes('Assists')
                  ? player.statistics[0].goals.assists + ' Assists'
                  : ''
              }
              navigate={() =>
                navigateToPlayer(
                  player.statistics[0].team.id,
                  player.statistics[0].team.name,
                  player.player.id
                )
              }
            />
          ))}
        </PlayersListContainer>
        {data.length >= 10 && <TopButton />}
      </PlayersContainer>
    );

  return <section>{content}</section>;
};
