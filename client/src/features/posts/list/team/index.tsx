import { useAppSelector } from '../../../../app/hooks';
import { useGetTeamPostsQuery, useCreatePostMutation } from '../../api';
import { postSchema } from '../../utils/postSchema';
import { CreatePost } from '../../../../app/types';
import { PostList } from '..';
import { Form } from '../../../../components/Form';

export const PostsTeam = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { data, isLoading } = useGetTeamPostsQuery(user?.team?.name as string);

  const [createPost] = useCreatePostMutation();

  const onSubmit = async (data: CreatePost) => {
    await createPost({
      text: data.text,
      type: 'team',
    });
  };
  return (
    <>
      <Form
        title="post"
        text={`Share something with ${user?.team?.name} fans`}
        schema={postSchema}
        onSubmit={onSubmit}
      />
      <PostList title={` ${user?.team?.name} private feed`} posts={data} />
    </>
  );
};
