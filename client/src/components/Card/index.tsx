import { User, PlayerStatistics, League, Team } from '../../app/types';
import {
  CardContainer,
  CardImage,
  CardDate,
  CardInfo,
  CardName,
  CardLogo,
} from './styles';
import { Transition } from '../Transition';

interface CardProps {
  name: string;
  image: string;
  type?: string | number;
  team?: Team;
  user?: User;
  player?: PlayerStatistics;
}

export const Card = ({ name, image, type, team, player, user }: CardProps) => {
  return (
    <Transition key="cards">
      <CardContainer>
        {type && <CardName>{type}</CardName>}
        <CardInfo>
          {team && <CardLogo src={team.logo} alt="" />}
          <CardImage src={image} alt="" />
        </CardInfo>
        <CardName>{name}</CardName>
      </CardContainer>
    </Transition>
  );
};
