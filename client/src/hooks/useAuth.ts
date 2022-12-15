// import { useMemo } from 'react';
// import { useToggle } from './useToggle';
// import { useTypedSelector } from './useTypedSelector';
// import { selectCurrentUser } from '../features/auth/authSlice';

// export const useAuth = () => {
//   const [checkingAuthStatus, toggleCheckingAuthStatus] = useToggle(true);

//   const user = localStorage.getItem('user') ? true : false;

//   return useMemo(() => ({ user }), [user]);
// };

import { useMemo } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { setUser } from '../features/auth/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const storedUser = useMemo(() => {
    const user = localStorage.getItem('user');
    if (user && user !== 'null') {
      return JSON.parse(user);
    }
    return null;
  }, []);

  const isAuthenticated = useMemo(() => storedUser !== null, [storedUser]);
};
