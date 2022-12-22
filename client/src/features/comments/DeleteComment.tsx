import { useAppSelector } from '../../hooks/useAppSelector';
import { useDeleteCommentMutation } from './api';
import { Post, Comment } from '../../app/types';
import { Delete } from './styles';
import { BsX } from 'react-icons/bs';

interface DeleteCommentProps {
  comment: Comment;
  post: Post;
}

export const DeleteComment = ({ comment, post }: DeleteCommentProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [deleteComment] = useDeleteCommentMutation();

  const userComments =
    user &&
    post.comments.filter(
      (comment) => comment.post === post._id && comment.user === user._id
    );

  const onDelete = () => {
    deleteComment({ commentId: comment._id, postId: post._id });
  };

  let content;
  if (userComments)
    content = (
      <Delete onClick={onDelete}>
        <BsX size={16} />
      </Delete>
    );
  else content = null;

  return <>{content}</>;
};
