import { useNavigate } from 'react-router-dom';
import { IconButton, IconButtonProps } from '../Icon';
import { TiArrowBack } from 'react-icons/ti';

interface BackButtonProps extends IconButtonProps {
  to?: string;
}

export const BackButton = ({ to, ...props }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <IconButton
      {...props}
      onClick={() => {
        if (to) {
          navigate(to);
        } else {
          navigate(-1);
        }
      }}
    >
      <TiArrowBack />
    </IconButton>
  );
};
