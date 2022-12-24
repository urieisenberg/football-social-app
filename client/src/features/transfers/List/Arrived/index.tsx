import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <TransfersIn>
      <TransfersName>{transfers.player.name}</TransfersName>
      <TransfersLogo
        src={transfers.transfers[0].teams.out.logo}
        alt={transfers.transfers[0].teams.out.name}
      />
      <AiOutlineArrowRight size={30} />
      <TransfersLogo
        src={transfers.transfers[0].teams.in.logo}
        alt={transfers.transfers[0].teams.in.name}
      />
      <TransfersPrice>{transfers.transfers[0].type || 'N/A'}</TransfersPrice>
      <TransfersDate>{transfers.transfers[0].date}</TransfersDate>
    </TransfersIn>
  );
};
