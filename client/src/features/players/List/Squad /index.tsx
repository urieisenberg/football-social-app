import { useParams } from 'react-router-dom';
import { useGetSquadQuery } from '../../api';
import { PlayersList } from '../PlayersList';
import { Loader } from '../../../../components/Loader';

export const SquadPlayersList = () => {
  const { teamid } = useParams();
  const { data, isLoading, isSuccess } = useGetSquadQuery(teamid as string);

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = <PlayersList title="Squad" data={data} />;

  return <section>{content}</section>;
};
