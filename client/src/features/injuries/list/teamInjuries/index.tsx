import { useParams } from 'react-router-dom';
import { useGetIjuriesByTeamQuery } from '../../api';
import { InjuriesList } from '../InjuriesList';
import { Loader } from '../../../../components/Loader';

export const InjuriesTeamList = () => {
  const { teamid } = useParams();
  const { data, isSuccess, isLoading } = useGetIjuriesByTeamQuery(
    teamid as string
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data)
    content = <InjuriesList data={data} title="Injuries" />;
  return <section>{content}</section>;
};
