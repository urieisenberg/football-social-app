import { useCreatePostMutation } from '../../../app/services/server-api/posts';
import { CreatePost } from '../../../app/types';
import { postSchema } from '../utils/postSchema';
import { Form } from '../../../components/Form';

export const SharePost = () => {
  const [createPost] = useCreatePostMutation();


  const onSubmit = async (data: CreatePost) => {
    await createPost({
      text: data.text,
      type: 'feed',
    });
  };

  return (
    <Form
      title="post"
      text="Share something"
      schema={postSchema}
      onSubmit={onSubmit}
    />
  );
};
