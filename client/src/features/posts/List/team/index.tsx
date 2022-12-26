import { useAppSelector } from '../../../../app/hooks';
import { useGetTeamPostsQuery } from '../../api';
import { PostList } from '..';

export const PostsTeam = () => {
  const { teamPosts } = useAppSelector((state) => state.post);
  const { user } = useAppSelector((state) => state.auth);

  const { data, isLoading } = useGetTeamPostsQuery();

  let content;
  if (isLoading) content = <div>Loading...</div>;
  else content = <PostList title={` ${user?.team?.name} feed`} posts={data} />;

  return <>{content}</>;
};
