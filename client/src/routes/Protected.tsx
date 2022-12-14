import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Protected = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/welcome" />;
};
