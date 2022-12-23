import { usePathname } from '../../../hooks/usePathname';
import { TopButton } from '../../../components/Button';
import { Card } from '../../../components/Card';
import {
  PlayersContainer,
  PlayersTitle,
  PlayersListContainer,
} from '../styles';
import { PlayerStatistics } from '../types';

interface PlayersListProps {
  data: PlayerStatistics[];
  title: string;
}

export const PlayersList = ({ data, title }: PlayersListProps) => {
  const { pathMatch } = usePathname();

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
            />
          ))}
        </PlayersListContainer>
        {!pathMatch('searchTerm', 'includes') && <TopButton />}
      </PlayersContainer>
    );

  return <section>{content}</section>;
};
