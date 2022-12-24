import { useNavigate } from 'react-router-dom';

export const useNavigateToTeam = (teamid: string, teamname: string) => {
  const navigate = useNavigate();
  return () => navigate(`/team/${teamid}`);
};
