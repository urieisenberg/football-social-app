import { useParams } from 'react-router-dom';
import { useGetTopAssistsQuery } from '../../api';
import { PlayersList } from '../PlayersList';

export const TopAssistsPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isLoading } = useGetTopAssistsQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  return (
    <>
      {data && (
        <PlayersList title="Top Assists" data={data} isLoading={isLoading} />
      )}
    </>
  );
};
