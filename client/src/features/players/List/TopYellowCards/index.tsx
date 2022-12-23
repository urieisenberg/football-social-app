import { useParams } from 'react-router-dom';
import { useGetTopYellowCardsQuery } from '../../api';
import { PlayersList } from '../PlayersList';

export const TopYellowCardsPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isLoading } = useGetTopYellowCardsQuery({
    season: seasonToUse,
    league: leagueid as string,
  });

  return (
    <>
      {data && (
        <PlayersList
          title="Top Yellow Cards"
          data={data}
          isLoading={isLoading}
        />
      )}
    </>
  );
};
