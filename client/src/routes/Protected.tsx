import { Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks/useAuth';

export const Protected = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/welcome" />;

  return (
    <>
      <Sidebar />
        <div className="withSidebar">
          <Outlet />
        </div>
    </>
  );
};
