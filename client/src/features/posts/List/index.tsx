import { Post } from '../../../app/types';
import { PostItem } from '../Item';
import {
  ListContainer,
  ListWrapper,
  ListTitle,
  ListContent,
  ListNotFound,
} from './styles';
import { Transition } from '../../../components/Transition';

interface PostListProps {
  posts: Post[];
  title: string;
  searchPosts?: JSX.Element;
}

export const PostList = ({ title, posts, searchPosts }: PostListProps) => {
  let content;
  if (posts?.length === 0)
    content = <ListNotFound>No posts found</ListNotFound>;
  else
    content = (
      <ListContent>
        {posts?.map((post: Post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </ListContent>
    );

  return (
    <Transition>
      {searchPosts}
      <ListWrapper>
        {' '}
        <ListTitle>{title}</ListTitle>
        <ListContainer>
          <ListContent>{content}</ListContent>
        </ListContainer>
      </ListWrapper>
    </Transition>
  );
};
