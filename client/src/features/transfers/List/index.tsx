import { useParams, useNavigate } from 'react-router-dom';
import { usePathname } from '../../../hooks/usePathname';
import { useGetTransfersQuery } from '../api';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import {
  TransfersContainer,
  TransfersWrapper,
  TransfersDate,
  TransfersIn,
  TransfersOut,
  TransfersPrice,
  TransfersType,
} from '../styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const TransfersList = () => {
  const { teamid } = useParams();
  const navigate = useNavigate();
  const pathMatch = usePathname();

  const { data, isLoading, isSuccess } = useGetTransfersQuery(teamid as string);

  const arrived = data?.filter(
    (transfer: any) => transfer.transfers[0].teams?.in?.id.toString() === teamid
  );

  const left = data?.filter(
    (transfer: any) =>
      transfer.transfers[0].teams?.out?.id.toString() === teamid
  );

  let content;

  return <div>TransfersList</div>;
};
