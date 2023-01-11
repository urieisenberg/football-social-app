import { useNavigate } from 'react-router-dom';
import { Post, Comment } from '../../app/types';
import { commentSchema } from './utils/commentSchema';
import { Form } from '../../components/Form';
import { DeleteComment } from './DeleteComment';
import {
  Container,
  Toggle,
  Icon,
  Length,
  Share,
  Name,
} from './styles';
import { BsChatLeftTextFill, BsChatLeftText } from 'react-icons/bs';
import {
  useCreateCommentMutation,
} from './api';
import { AnimatePresence } from 'framer-motion';

interface CommentProps {
  post: Post;
  showComments: boolean;
  setShowComments: () => void;
}

export const Comments = ({
  post,
  showComments,
  setShowComments,
}: CommentProps) => {
  const navigate = useNavigate();

  const [createComment] = useCreateCommentMutation();

  const onComment = async (data: Comment) => {
    await createComment({
      postId: post._id,
      comment: data.comment,
    });
  };

  return (
    <>
      {showComments ? (
        <>
          <Toggle>
            <Length>{post.comments?.length} </Length>

            <Icon>
              <BsChatLeftTextFill size={16} onClick={setShowComments} />
            </Icon>
          </Toggle>
          <AnimatePresence>
            <Container>
              {post.comments?.map((comment) => (
                <div key={comment._id}>
                  <DeleteComment comment={comment} post={post} />
                  <Name onClick={() => navigate(`/profile/${comment.user}`)}>
                    {comment.username}
                  </Name>
                  : {comment.comment}
                </div>
              ))}
              <Share place={post.comments?.length > 0 ? 'true' : 'false'}>
                <Form
                  schema={commentSchema}
                  onSubmit={onComment}
                  title="comment"
                  text="enter a comment"
                />
              </Share>
            </Container>
          </AnimatePresence>
        </>
      ) : (
        <Toggle>
          <Length>{post.comments?.length} </Length>
          <Icon>
            <BsChatLeftText size={16} onClick={setShowComments} />
          </Icon>
        </Toggle>
      )}
    </>
  );
};
