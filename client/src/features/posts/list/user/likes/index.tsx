import { useAppSelector } from '../../../../../app/hooks';
import { useGetLikedPostQuery } from '../../../api';
import { PostList } from '../..';

export const UserLikedPosts = () => {
  const { user } = useAppSelector((state) => state.user);

  const { data: posts } = useGetLikedPostQuery(
    user?.username as string
  );

  return <PostList posts={posts} title={`${user?.username}'s liked posts`} />;
};
