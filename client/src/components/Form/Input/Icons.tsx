import { GoMail, GoLock } from 'react-icons/go';
import { AiOutlineUser } from 'react-icons/ai';

export interface InputIconsProps {
  type: 'username' | 'email' | 'password';
}

export const InputIcons = ({ type }: InputIconsProps) => {
  switch (type) {
    case 'username':
      return <AiOutlineUser size={20}/>;
    case 'email':
      return <GoMail size={20} />;
    case 'password':
      return <GoLock size={20} />;
    default:
      return null;
  }
};
