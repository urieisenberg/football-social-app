import { useNavigate } from 'react-router-dom';

export const useNavigateToFixture = () => {
  const navigate = useNavigate();

  const navigateToFixture = (
    teamid: string,
    teamname: string,
    fixture: number,
    path?: 'next' | 'last'
  ) => {
    if (path) {
      navigate(`/team/${teamid}/${teamname}/fixtures/${path}`);
    } else navigate(`/team/${teamid}/${teamname}/fixtures/${fixture}`);
  };

  return { navigateToFixture };
};
