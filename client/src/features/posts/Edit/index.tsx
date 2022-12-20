import { useState } from 'react';
import { useUpdatePostMutation } from '../../../app/services/server-api/posts';
import { Post } from '../../../app/types';
import { Editable } from '../../../components/Form/Editable';
import { toast } from 'react-toastify';

interface EditPostProps {
  post: Post;
  showEdit: boolean;
  toggleEdit: () => void;
  toggleOptions: () => void;
}

export const EditPost = ({
  showEdit,
  toggleEdit,
  post,
  toggleOptions,
}: EditPostProps) => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const [postContent, setPostContent] = useState(post.text);

  console.log('postContent', postContent);

  const handleUpdate = async () => {
    await updatePost({ _id: post._id, type: post.type, text: postContent });
    toast.success('Post updated', {
      toastId: 'updatePost',
    });
    toggleEdit();
    toggleOptions();
  };

  return (
    <Editable
      editable={showEdit}
      setEditable={toggleEdit}
      text={postContent}
      action={handleUpdate}
    >
      <input
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
    </Editable>
  );
};
