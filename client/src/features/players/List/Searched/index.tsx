import { useParams, useSearchParams } from 'react-router-dom';
import { useSearchPlayersQuery } from '../../api';
import { PlayersList } from '../PlayersList';
import { Loader } from '../../../../components/Loader';

export const SearchedPlayersList = () => {
  const { leagueid } = useParams();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('searchTerm') || '';

  const { data, isSuccess, isLoading } = useSearchPlayersQuery({
    league: leagueid as string,
    search: searchTerm,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = (
      <PlayersList title={`Search Results for ${searchTerm}`} data={data} />
    );

  return <section>{content}</section>;
};
