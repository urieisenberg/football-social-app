import { useNavigate } from 'react-router-dom';

export const useNavigateToPlayer = (
  teamid: string,
  teamname: string,
  playerid: string
) => {
  const navigate = useNavigate();
  return () => navigate(`/team/${teamid}/player/${playerid}`);
};

