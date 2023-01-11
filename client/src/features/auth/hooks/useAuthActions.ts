import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks/useAppDispatch';
import {
  setUser as login,
  logout as setLogout,
} from '../authSlice';
import { User } from '../../../app/types';

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setUser = (user: User) => {
    dispatch(login(user));
    navigate('/');
  };

  const logout = () => {
    dispatch(setLogout());
    navigate('/welcome');
  };

  return { setUser, logout };
};
