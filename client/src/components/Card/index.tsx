import { usePathname } from '../../hooks/usePathname';
import { User, Player, Statistics, Injuries } from '../../app/types';
import {
  CardContainer,
  CardImage,
  CardDate,
  CardInfo,
  CardName,
  CardLogo,
} from './styles';

interface CardProps {
  user: User;
  player: Player;
  statistics: Statistics;
  injuries?: Injuries;
}

export const Card = ({ user, player, statistics }: CardProps) => {
  const { pathMatch } = usePathname();

  const isScorers = pathMatch('scorers', 'endsWith');
  const isAssists = pathMatch('assists', 'endsWith');
  const isRedCards = pathMatch('red', 'endsWith');
  const isYellowCards = pathMatch('yellow', 'endsWith');
  const isInjuries = pathMatch('injuries', 'endsWith');
  const isLeague = pathMatch('league', 'includes');

  return (
    <CardContainer>
      {isScorers && <CardName>{statistics.goals.total}</CardName>}
      {isAssists && <CardName>{statistics.goals.assists}</CardName>}
      {isRedCards && <CardName>{statistics.cards.red}</CardName>}
      {isYellowCards && <CardName>{statistics.cards.yellow}</CardName>}
      {/* {isInjuries && <CardName>{statistics.injuries.games}</CardName>} */}

      <CardInfo>
        {isLeague && <CardLogo src={statistics.team.logo} alt="" />}
        <CardImage
          src={player.photo || user.profilePicture || statistics.team.logo}
          alt=""
        />
      </CardInfo>
      <CardName>{player.name || user.username}</CardName>
    </CardContainer>
  );
};
