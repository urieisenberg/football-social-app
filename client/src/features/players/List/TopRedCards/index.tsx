import { useParams } from 'react-router-dom';
import { useGetTopRedCardsQuery } from '../../api';
import { PlayersList } from '../PlayersList';

export const TopRedCardsPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isLoading } = useGetTopRedCardsQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  return (
    <>
      {data && (
        <PlayersList title="Top Red Cards" data={data} isLoading={isLoading} />
      )}
    </>
  );
};
