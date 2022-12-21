import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../../hooks/useToggle';
import { Post } from '../../../app/types';
import { Comments } from '../../comments';
import { LikePost } from './LikePost';
import { PostOptions } from './PostOptions';
import {
  Wrapper,
  Container,
  Content,
  Name,
  Image,
  CreatedAt,
  UpdatedAt,
  Text,
} from './styles';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  const navigate = useNavigate();

  const [showEdit, toggleEdit] = useToggle(false);
  const [showComments, toggleComments] = useToggle(false);

  const createdAt = new Date(post.createdAt).toLocaleString();
  const updatedAt = post.updatedAt && new Date(post.updatedAt).toLocaleString();


  console.log(post)

  return (
    <Wrapper>
      <Container>
        <Content>
          <Image
            src={post.pic}
            alt={post.username}
            onClick={() => navigate(`/team/${post.team}`)}
          />
          <Name onClick={() => navigate(`/profile/${post.username}`)}>
            {post.username}
          </Name>
          {/* Follow */}
          <CreatedAt>{createdAt}</CreatedAt>
          <PostOptions
            post={post}
            showEdit={showEdit}
            toggleEdit={toggleEdit}
          />
          <Text>{!showEdit && post.text}</Text>
          <LikePost post={post} />
          {updatedAt !== createdAt && (
            <UpdatedAt>post last updated: {updatedAt}</UpdatedAt>
          )}
          <Comments
            post={post}
            showComments={showComments}
            setShowComments={toggleComments}
          />
        </Content>
      </Container>
    </Wrapper>
  );
};
