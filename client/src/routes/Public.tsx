import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const Public = () => {
  const { user } = useAuth();

  return user ? <Navigate to="/league" /> : <Outlet />;
};
