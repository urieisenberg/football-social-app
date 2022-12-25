import { useParams } from 'react-router-dom';
import { usePathname } from '../../../../app/hooks';
import { useGetCurrentRoundQuery, useGetCurrentFixturesQuery } from '../../api';
import { Loader } from '../../../../components/Loader';
import { FixturesList } from '..';

export const CurrentFixturesList = () => {
  const { leagueid } = useParams();
  const { pathMatch } = usePathname();

  const { data: round } = useGetCurrentRoundQuery(leagueid as string);

  const roundToUse =
    round && pathMatch('next', 'includes')
      ? (round.currentRound as string)
      : (round?.previousRound as string);

  const { data, error, isLoading, isSuccess } = useGetCurrentFixturesQuery({
    leagueid: leagueid as string,
    round: roundToUse,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (error || !data) content = <>No fixtures found</>;
  else if (isSuccess && data) content = <FixturesList fixtures={data} />;

  return <>{content}</>;
};
