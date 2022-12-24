import { useNavigate } from 'react-router-dom';

export const useNavigateToProfile = (username: string) => {
  const navigate = useNavigate();
  return () => navigate(`/profile/${username}`);
};
