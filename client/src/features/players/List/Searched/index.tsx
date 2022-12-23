import { useParams, useSearchParams } from 'react-router-dom';
import { useSearchPlayersQuery } from '../../api';
import { PlayersList } from '../PlayersList';

export const SearchedPlayersList = () => {
  const { leagueid } = useParams();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('searchTerm') || '';

  const { data, isLoading } = useSearchPlayersQuery({
    league: leagueid as string,
    search: searchTerm,
  });

  return (
    <>
      {data && (
        <PlayersList
          title={`Search Results for ${searchTerm}`}
          data={data}
          isLoading={isLoading}
        />
      )}
    </>
  );
};
