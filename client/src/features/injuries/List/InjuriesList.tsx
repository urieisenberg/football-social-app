import { Injury } from '../types';
import { Card } from '../../../components/Card';
import { TopButton } from '../../../components/Button';
import { InjuriesContainer, InjuriesPlayers, InjuriesDates } from '../styles';
import { injuriesReasonsHandler } from '../utils/injuriesReasonsHandler';

interface InjuriesListProps {
  data: Injury[];
  title: string;
  type?: string;
}

export const InjuriesList = ({ data, title }: InjuriesListProps) => {
  let content;
  if (data.length === 0)
    content = (
      <InjuriesContainer>
        <h1>{title}</h1>
        No Injuries Found
      </InjuriesContainer>
    );
  else
    content = (
      <InjuriesContainer>
        <h1>{title}</h1>
        <InjuriesPlayers>
          {data.map((injury) => (
            <>
              <InjuriesDates>
                {new Date(injury.fixture.date).toLocaleDateString()}
              </InjuriesDates>
              <Card
                key={injury.player.id}
                injuries={injury}
                image={injury.player.photo}
                name={injury.player.name}
                team={injury.team}
                type={
                  injuriesReasonsHandler(
                    injury.player.reason
                  ) as unknown as string
                }
              />
            </>
          ))}
        </InjuriesPlayers>
        {data.length >= 10 && <TopButton />}
      </InjuriesContainer>
    );

  return <section>{content}</section>;
};
