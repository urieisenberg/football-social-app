import { useParams } from 'react-router-dom';
import { useGetTopAssistsQuery } from '../../api';
import { PlayersList } from '../PlayersList';
import { Loader } from '../../../../components/Loader';

export const TopAssistsPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isSuccess, isLoading } = useGetTopAssistsQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = <PlayersList title="Top Assists" data={data} />;

  return <section>{content}</section>;
};
