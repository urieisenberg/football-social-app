import { useRoutes, Outlet } from 'react-router-dom';
import { PostsFeed } from '../../features/posts/list/feed';
import { SharePost } from '../../features/posts/create';
import { Nav } from '../../components/Nav';

export const Feed = () => {
  let elements = useRoutes([
    { path: 'likes', element: <PostsFeed /> },
    { path: 'comments', element: <PostsFeed /> },
    { path: 'oldest', element: <PostsFeed /> },
    { path: 'newest', element: <PostsFeed /> },
  ]);

  return (
    <>
      <Nav links={['likes', 'comments', 'oldest', 'newest']} />
      <SharePost />
      <Outlet />
      {elements}
    </>
  );
};
