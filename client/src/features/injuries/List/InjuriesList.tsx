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
  let content;
  console.log(data)
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
              team={injury.team}
              type={injuriesReasonsHandler(injury.player.reason as unknown as string)}
            />
          ))}
        </InjuriesPlayers>
        {data.length >= 20 && <TopButton />}
      </InjuriesContainer>
    );

  return <section>{content}</section>;
};
