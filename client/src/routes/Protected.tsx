import { Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks/useAuth';
import { BackButton } from '../components/Button';

export const Protected = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/welcome" />;

  return (
    <>
      <BackButton />
      <Sidebar />
      <Outlet />
    </>
  );
};
