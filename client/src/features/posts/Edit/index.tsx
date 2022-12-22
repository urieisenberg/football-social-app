import { useState } from 'react';
import { useUpdatePostMutation } from '../api';
import { Post } from '../../../app/types';
import { Editable } from '../../../components/Form/Editable';
import { toast } from 'react-toastify';
import { EditInput } from '../Item/styles';

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
      <EditInput
        autoFocus
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
    </Editable>
  );
};
