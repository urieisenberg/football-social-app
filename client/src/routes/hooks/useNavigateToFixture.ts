import { useNavigate } from 'react-router-dom';

export const useNavigateToFixture = (
  teamid: string,
  teamname: string,
  fixtureid: string
) => {
  const navigate = useNavigate();
  return () => navigate(`/team/${teamid}/fixture/${fixtureid}`);
};
