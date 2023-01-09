import { useNavigate } from 'react-router-dom';

export const useNavigateToProfile = () => {
  const navigate = useNavigate();
  const navigateToProfile = (username: string, path?: string) => {
    if (path) {
      navigate(`/profile/${username}/${path}`);
    } else {
      navigate(`/profile/${username}`);
    }
  };

  return { navigateToProfile };
};
