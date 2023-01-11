import { useParams } from 'react-router-dom';
import { useGetCoachTrophiesQuery } from '../../api';
import { TrophiesList } from '..';

export const CoachTrophies = () => {
  const { coachid } = useParams();
  const {
    data: trophies,
    isError,
    isSuccess,
  } = useGetCoachTrophiesQuery(coachid as string);

  let content;
  if (isError || !trophies) content = null;
  else if (isSuccess && trophies.length)
    content = <TrophiesList trophies={trophies} />;

  return <>{content}</>;
};
