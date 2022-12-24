import { useParams } from 'react-router-dom';
import { useGetSquadQuery } from '../../api';
import { Loader } from '../../../../components/Loader';
import { TopButton } from '../../../../components/Button';
import { Card } from '../../../../components/Card';
import { PlayersContainer, PlayersListContainer } from '../../styles';

export const SquadPlayersList = () => {
  const { teamid } = useParams();
  const { data, isLoading, isSuccess } = useGetSquadQuery(teamid as string);

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess)
    content = (
      <PlayersContainer>
        <PlayersListContainer>
          {data.map((player) => (
            <Card
              key={player.id}
              player={player}
              image={player.photo}
              name={player.name}
              type={player.position}
            />
          ))}
        </PlayersListContainer>
        <TopButton />
      </PlayersContainer>
    );

  return <section>{content}</section>;
};
