import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import { UserBar } from '../../features/users/bar';
import {
  FollowersList,
  FollowingList,
  FavFixturesList,
} from '../../features/users/list';


export const Profile = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="posts" /> },
    { path: 'posts', element: <></> },
    { path: 'following', element: <FollowingList /> },
    { path: 'followers', element: <FollowersList /> },
    { path: 'likes', element: <></> },
    { path: 'fixtures', element: <FavFixturesList /> },
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
