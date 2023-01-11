import { useParams } from 'react-router-dom';
import { useGetSquadQuery } from '../../api';
import { useNavigateToPlayer } from '../../../../app/hooks';
import { Loader } from '../../../../components/Loader';
import { TopButton } from '../../../../components/Button';
import { Card } from '../../../../components/Card';
import { PlayersContainer, PlayersListContainer } from '../../styles';

export const SquadPlayersList = () => {
  const { teamid, teamname } = useParams();
  const { data, isLoading, isSuccess } = useGetSquadQuery(teamid as string);
  const { navigateToPlayer } = useNavigateToPlayer();

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
              navigate={() =>
                navigateToPlayer(
                  teamid as unknown as number,
                  teamname as string,
                  player.id
                )
              }
            />
          ))}
        </PlayersListContainer>
        <TopButton />
      </PlayersContainer>
    );

  return <section>{content}</section>;
};
