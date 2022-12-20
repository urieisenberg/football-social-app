import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../../hooks/useToggle';
import { Post } from '../../../app/types';
import { LikePost } from './LikePost';
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

  const createdAt = new Date(post.createdAt).toLocaleString();
  const updatedAt =
    post.updatedAt && new Date(post.updatedAt).toLocaleString();

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
          {/* Actions */}
          <Text>{post.text}</Text>
          <LikePost post={post} />
          {updatedAt !== createdAt && (
            <UpdatedAt>post last updated: {updatedAt}</UpdatedAt>
          )}
          {/* Comments */}
        </Content>
      </Container>
    </Wrapper>
  );
};
