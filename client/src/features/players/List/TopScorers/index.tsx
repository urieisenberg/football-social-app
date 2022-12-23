import { useParams } from 'react-router-dom';
import { useGetTopScorersQuery } from '../../api';
import { PlayersList } from '../PlayersList';

export const TopScorersPlayersList = () => {
  const { season, leagueid } = useParams();
  let seasonToUse = (season && parseInt(season)) || 2022;
  const { data, isLoading } = useGetTopScorersQuery({
    season: seasonToUse,
    league: leagueid as string,
  });
  

  console.log('data', data);

  return (
    <>
      {data && (
        <PlayersList title="Top Scorers" data={data} isLoading={isLoading} />
      )}
    </>
  );
};
