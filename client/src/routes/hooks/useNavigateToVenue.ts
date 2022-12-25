import { useNavigate } from 'react-router-dom';

export const useNavigateToVenue = () => {
  const navigate = useNavigate();
  const navigateToVenue = (leagueid: number, venueid: number) => {
    navigate(`/league/${leagueid}/venues/${venueid}`);
  };
  return { navigateToVenue };
};
