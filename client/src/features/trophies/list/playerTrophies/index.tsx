import { useParams } from 'react-router-dom';
import { useGetPlayerTrophiesQuery } from '../../api';
import { TrophiesList } from '..';

export const PlayerTrophies = () => {
  const { playerid } = useParams();
  const {
    data: trophies,
    isError,
    isSuccess,
  } = useGetPlayerTrophiesQuery(playerid as string);

  let content;
  if (isError || !trophies) content = null;
  else if (isSuccess && trophies.length)
    content = <TrophiesList trophies={trophies} />;

  return <>{content}</>;
};
