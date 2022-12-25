import { useNavigate } from 'react-router-dom';

export const useNavigateToHeadToHead = () => {
  const navigate = useNavigate();
  const navigateToHeadToHead = (
    teamid: string,
    teamname: string,
    teamidhome: number,
    teamidaway: number,
    teamnamehome: string,
    teamnameaway: string
  ) => {
    const teamids = `${teamidhome}-${teamidaway}`;
    navigate(
      `/team/${teamid}/${teamname}/fixtures/headtohead/${teamids}/${teamnamehome}/${teamnameaway}`
    );
  };
  return { navigateToHeadToHead };
};
