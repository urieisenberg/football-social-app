import { useNavigate } from 'react-router-dom';

export const useNavigateToLeagueFixtures = (
  leagueid: string,
  leaguename: string
) => {
  const navigate = useNavigate();
  return () => navigate(`/league/${leagueid}/fixtures`);
};
