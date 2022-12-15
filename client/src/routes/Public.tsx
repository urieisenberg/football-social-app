import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Public = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/"/> : <Outlet />;
};
