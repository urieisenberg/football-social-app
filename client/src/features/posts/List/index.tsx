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
import { TopButton } from '../../../components/Button';

interface PostListProps {
  posts: Post[] | undefined;
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
        <ListTitle>{title}</ListTitle>
        <ListContainer>
          <ListContent>
            {content} {posts && posts?.length >= 3 && <TopButton />}
          </ListContent>
        </ListContainer>
      </ListWrapper>
    </Transition>
  );
};
