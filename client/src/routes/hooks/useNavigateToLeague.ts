import { useNavigate } from 'react-router-dom';

export const useNavigateToLeague = (leagueid: string, leaguename: string) => {
  const navigate = useNavigate();
  return () => navigate(`/league/${leagueid}`);
};
