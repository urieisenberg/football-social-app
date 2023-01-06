import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import { UserBar } from '../../features/users/bar';

export const Profile = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="posts" /> },
    { path: 'posts', element: <></> },
    { path: 'following', element: <></> },
    { path: 'followers', element: <></> },
    { path: 'likes', element: <></> },
    { path: 'fixtures', element: <></> },
  ]);

  return (
    <>
      <UserBar />
      <Nav links={['posts', 'likes', 'following', 'followers', 'fixtures']} />
      <Outlet />
      {elements}
    </>
  );
};
