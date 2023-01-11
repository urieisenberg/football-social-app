import { useAppSelector } from '../../../app/hooks';
import { useToggle, useNavigateToProfile } from '../../../app/hooks';
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
  Follow,
} from './styles';
import { FollowUser } from '../../users/item/follow';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { navigateToProfile } = useNavigateToProfile();

  const [showEdit, toggleEdit] = useToggle(false);
  const [showComments, toggleComments] = useToggle(false);

  const createdAt = new Date(post.createdAt).toLocaleString();
  const updatedAt = post.updatedAt && new Date(post.updatedAt).toLocaleString();

  return (
    <Wrapper>
      <Container>
        <Content>
          <Image
            src={post.pic}
            alt={post.username}
            onClick={() => navigateToProfile(post.username)}
          />
          <Name onClick={() => navigateToProfile(post.username)}>
            {post.username}
          </Name>
          {post.username !== user?.username && (
            <Follow>
              <FollowUser id={post.user} username={post.username} />
            </Follow>
          )}
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
