import { useNavigate } from 'react-router-dom';
import { IconButton, IconButtonProps } from '../Icon';
import { GoHome } from 'react-icons/go';

export const HomeButton = ({ size, home }: IconButtonProps) => {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate('/welcome')} home="true">
      <GoHome size={size} />
    </IconButton>
  );
};
