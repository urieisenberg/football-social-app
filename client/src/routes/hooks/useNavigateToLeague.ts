import { useNavigate } from 'react-router-dom';

export const useNavigateToLeague = () => {
  const navigate = useNavigate();
  const navigateToLeague = (leagueid: number) =>
    navigate(`/league/${leagueid}`);
  return { navigateToLeague };
};
