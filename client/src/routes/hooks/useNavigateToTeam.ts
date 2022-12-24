import { useNavigate } from 'react-router-dom';

export const useNavigateToTeam = () => {
  const navigate = useNavigate();
  const navigateToTeam = (teamid: number, teamname: string, path?: string) => {
    if (path) {
      navigate(`/team/${teamid}/${path}`);
    }
    navigate(`/team/${teamid}/${teamname}`);
  };
  return { navigateToTeam };
};
