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
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'null') {
      return JSON.parse(storedUser);
    }
    return null;
  }, []);
};
