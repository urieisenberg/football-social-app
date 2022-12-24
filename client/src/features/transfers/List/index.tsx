import { useParams } from 'react-router-dom';
import { usePathname } from '../../../routes/hooks/usePathname';
import { useGetTransfersQuery } from '../api';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import { TransfersArrivedList } from './arrived';
import { TransferLeftList } from './left';
import { TransfersContainer } from '../styles';
import { TopButton } from '../../../components/Button';

export const TransfersList = () => {
  const { teamid } = useParams();
  const { pathMatch } = usePathname();

  const { data, isLoading, isSuccess } = useGetTransfersQuery(teamid as string);

  const arrived = data?.filter(
    (transfer: any) => transfer.transfers[0].teams?.in?.id.toString() === teamid
  );

  const left = data?.filter(
    (transfer: any) =>
      transfer.transfers[0].teams?.out?.id.toString() === teamid
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (!left && !arrived) content = <div>No transfers found</div>;
  else if (pathMatch('arrived', 'includes') && isSuccess)
    content = arrived?.map((transfer: any) => (
      <TransfersArrivedList key={transfer.id} transfers={transfer} />
    ));
  else if (pathMatch('left', 'includes') && isSuccess)
    content = left?.map((transfer: any) => (
      <TransferLeftList key={transfer.id} transfers={transfer} />
    ));

  return (
    <Transition>
      <TransfersContainer>
        {content}
      </TransfersContainer>
    </Transition>
  );
};
