import { useParams } from 'react-router-dom';
import { useGetIjuriesByLeagueQuery } from '../../api';
import { InjuriesList } from '../InjuriesList';
import { Loader } from '../../../../components/Loader';

export const InjuriesLeagueList = () => {
  const { leagueid } = useParams();
  const { data, isSuccess, isLoading } = useGetIjuriesByLeagueQuery(
    leagueid as string
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = <InjuriesList data={data} title="Injuries" />;

  return <section>{content}</section>;
};
