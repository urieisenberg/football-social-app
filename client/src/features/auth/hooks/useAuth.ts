import { useMemo } from 'react';
import { useAppSelector } from '../../../app/hooks/useAppSelector';

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthenticated = useMemo(() => user !== null, [user]);
  return { user, isAuthenticated };
};
