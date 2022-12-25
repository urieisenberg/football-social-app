import { useParams } from 'react-router-dom';
import { useGetTeamNextFixturesQuery } from '../../api';
import { Loader } from '../../../../components/Loader';
import { FixturesList } from '..';

export const NextFixturesList = () => {
  const { teamid } = useParams();

  const { data, error, isLoading, isSuccess } = useGetTeamNextFixturesQuery(
    teamid as string
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (error || !data) content = <>No fixtures found</>;
  else if (isSuccess && data)
    content = <FixturesList fixtures={data} />;

  return <>{content}</>;
};
