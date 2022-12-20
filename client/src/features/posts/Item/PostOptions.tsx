import { useAppSelector } from '../../../hooks/useAppSelector';
import { useToggle } from '../../../hooks/useToggle';
import { useDeletePostMutation } from '../../../app/services/server-api/posts';
import { Post } from '../../../app/types';
import { toast } from 'react-toastify';
import { Options, Option, Text } from './styles';
import { BsPen, BsThreeDotsVertical, BsTrash, BsX } from 'react-icons/bs';
import { EditPost } from '../Edit';

interface PostOptionsProps {
  post: Post;
  showEdit: boolean;
  toggleEdit: () => void;
}

export const PostOptions = ({
  post,
  showEdit,
  toggleEdit,
}: PostOptionsProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const [showOptions, toggleOptions] = useToggle(false);

  const handleDelete = async () => {
    await deletePost(post._id);
    toast.success('Post deleted', {
      toastId: 'deletePost',
    });
  };

  return (
    <>
      {user && user._id === post.user && (
        <Options>
          {!showOptions ? (
            <Option>
              <BsThreeDotsVertical onClick={toggleOptions} />
            </Option>
          ) : (
            <>
              <Option>
                <BsX
                  onClick={() => {
                    toggleOptions();
                    showEdit && toggleEdit();
                  }}
                  size={16}
                />
              </Option>
              <Option>
                <BsPen onClick={toggleEdit} size={16} />
              </Option>
              <Option>
                <BsTrash onClick={handleDelete} size={16} />
              </Option>
            </>
          )}
        </Options>
      )}
      {showEdit && (
        <Text>
          <EditPost
            toggleEdit={toggleEdit}
            showEdit={showEdit}
            post={post}
            toggleOptions={toggleOptions}
          />
        </Text>
      )}
    </>
  );
};
