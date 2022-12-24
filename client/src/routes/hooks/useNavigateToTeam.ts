import { useNavigate } from 'react-router-dom';

export const useNavigateToTeam = (
  teamid: string,
  teamname: string,
  path?: string
) => {
  const navigate = useNavigate();
  if (path) {
    return () => navigate(`/team/${teamid}/${path}`);
  }
  return () => navigate(`/team/${teamid}`);
};
