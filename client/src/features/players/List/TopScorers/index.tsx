import { useParams } from 'react-router-dom';
import { useGetTopScorersQuery } from '../../api';
import { PlayersList } from '../PlayersList';
import { Loader } from '../../../../components/Loader';

export const TopScorersPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isSuccess, isLoading } = useGetTopScorersQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = <PlayersList title="Top Scorers" data={data} />;

  return <section>{content}</section>;
};
