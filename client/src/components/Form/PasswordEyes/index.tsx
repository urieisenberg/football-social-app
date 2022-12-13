import { GoEye, GoEyeClosed } from 'react-icons/go';
import { PasswordEyesContainer } from './styles';

interface PasswordEyesProps {
  showPassword: boolean;
  setShowPassword: () => void;
}

export const PasswordEyes = ({
  showPassword,
  setShowPassword,
}: PasswordEyesProps) => {
  return (
    <PasswordEyesContainer>
      {showPassword ? (
        <GoEyeClosed onClick={setShowPassword} size={18} />
      ) : (
        <GoEye onClick={setShowPassword} size={18} />
      )}
    </PasswordEyesContainer>
  );
};
