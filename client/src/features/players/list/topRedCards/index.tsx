import { useParams } from 'react-router-dom';
import { useGetTopRedCardsQuery } from '../../api';
import { PlayersList } from '../PlayersList';
import { Loader } from '../../../../components/Loader';

export const TopRedCardsPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isSuccess, isLoading } = useGetTopRedCardsQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (data && isSuccess)
    content = <PlayersList title="Top Red Cards" data={data} />;

  return <section>{content}</section>;
};
