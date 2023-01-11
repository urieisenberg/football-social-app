import { useNavigateToTeam } from '../../../../app/hooks';
import { TransfersListProps } from '../../types';
import {
  TransfersIn,
  TransfersLogo,
  TransfersName,
  TransfersPrice,
  TransfersDate,
} from '../../styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const TransfersArrivedList = ({ transfers }: TransfersListProps) => {
  const { navigateToTeam } = useNavigateToTeam();

  return (
    <TransfersIn>
      <TransfersName>{transfers.player.name}</TransfersName>
      <TransfersLogo
        onClick={() =>
          navigateToTeam(
            transfers.transfers[0].teams.out.id,
            transfers.transfers[0].teams.out.name
          )
        }
        src={transfers.transfers[0].teams.out.logo}
        alt={transfers.transfers[0].teams.out.name}
      />
      <AiOutlineArrowRight size={30} />
      <TransfersLogo
        onClick={() =>
          navigateToTeam(
            transfers.transfers[0].teams.in.id,
            transfers.transfers[0].teams.in.name
          )
        }
        src={transfers.transfers[0].teams.in.logo}
        alt={transfers.transfers[0].teams.in.name}
      />
      <TransfersPrice>{transfers.transfers[0].type || 'N/A'}</TransfersPrice>
      <TransfersDate>{transfers.transfers[0].date}</TransfersDate>
    </TransfersIn>
  );
};
