import { useNavigate } from 'react-router-dom';

export const useNavigateToPlayer = () => {
  const navigate = useNavigate();

  const navigateToPlayer = (
    teamid: number,
    teamname: string,
    playerid: number
  ) => {
    navigate(`/team/${teamid}/${teamname}/players/${playerid}`);
  };

  return { navigateToPlayer };
};
