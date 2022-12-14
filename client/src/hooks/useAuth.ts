import { useMemo } from 'react';
import { useToggle } from './useToggle';
import { useTypedSelector } from './useTypedSelector';
import { selectCurrentUser } from '../features/auth/authSlice';

export const useAuth = () => {
  const [checkingAuthStatus, toggleCheckingAuthStatus] = useToggle(true);

  const user = localStorage.getItem('user') ? true : false;

  return useMemo(() => ({ user }), [user]);
};
