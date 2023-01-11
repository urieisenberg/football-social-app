import { useParams } from 'react-router-dom';
import { useNavigateToPlayer } from '../../../app/hooks';
import { Injury } from '../types';
import { Card } from '../../../components/Card';
import { TopButton } from '../../../components/Button';
import { InjuriesContainer, InjuriesPlayers } from '../styles';
import { injuriesReasonsHandler } from '../utils/injuriesReasonsHandler';

interface InjuriesListProps {
  data: Injury[];
  title: string;
  type?: string;
}

export const InjuriesList = ({ data, title }: InjuriesListProps) => {
  const { teamid, teamname } = useParams();
  const { navigateToPlayer } = useNavigateToPlayer();
  let content;
  if (data.length === 0)
    content = <InjuriesContainer>No Injuries Found</InjuriesContainer>;
  else
    content = (
      <InjuriesContainer>
        <InjuriesPlayers>
          {data.map((injury) => (
            <Card
              key={injury.player.id}
              injuries={injury}
              image={injury.player.photo}
              name={injury.player.name}
              type={injuriesReasonsHandler(
                injury.player.reason as unknown as string
              )}
              navigate={() =>
                navigateToPlayer(
                  teamid as unknown as number,
                  teamname as string,
                  injury.player.id
                )
              }
            />
          ))}
        </InjuriesPlayers>
        {data.length >= 20 && <TopButton />}
      </InjuriesContainer>
    );

  return <section>{content}</section>;
};
