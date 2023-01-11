import { useParams } from 'react-router-dom';
import { useGetTopYellowCardsQuery } from '../../api';
import { PlayersList } from '../PlayersList';
import { Loader } from '../../../../components/Loader';

export const TopYellowCardsPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isLoading, isSuccess } = useGetTopYellowCardsQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = <PlayersList title="Top Yellow Cards" data={data} />;

  return <section>{content}</section>;
};
