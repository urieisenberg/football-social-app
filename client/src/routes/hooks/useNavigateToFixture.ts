import { useNavigate } from 'react-router-dom';

export const useNavigateToFixture = () => {
  const navigate = useNavigate();

  const navigateToFixture = (
    teamid: string,
    teamname: string,
    fixture: number
  ) => {
    navigate(`/team/${teamid}/${teamname}/fixtures/${fixture}`);
  };

  return { navigateToFixture };
};
