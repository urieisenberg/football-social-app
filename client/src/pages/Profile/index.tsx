import { useAppSelector } from '../../app/hooks';
import { useParams, useRoutes, Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import { UserBar } from '../../features/users/bar';
import {
  FollowersList,
  FollowingList,
  FavFixturesList,
} from '../../features/users/list';
import { UserPosts, UserLikedPosts } from '../../features/posts/list/user';

export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { username } = useParams();

  let elements = useRoutes([
    { path: '', element: <Navigate to="posts" /> },
    { path: 'posts', element: <UserPosts /> },
    { path: 'following', element: <FollowingList /> },
    { path: 'followers', element: <FollowersList /> },
    { path: 'likes', element: <UserLikedPosts /> },
    { path: 'fixtures', element: <FavFixturesList /> },
    { path: 'settings', element: <Navigate to={`/account/${user?._id}`} /> },
  ]);

  const links = () => {
    let l = ['posts', 'likes', 'following', 'followers', 'fixtures'];
    if (user?.username === username) l.push('settings');
    return l;
  };

  return (
    <>
      <UserBar />
      <Nav links={links()} />
      <Outlet />
      {elements}
    </>
  );
};
