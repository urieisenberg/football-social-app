import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks/useAppSelector';
import { useGetPostsQuery, useSearchPostsQuery } from '../../api';
import { Post, SearchPosts } from '../../../../app/types';
import { Search } from '../../../../components/Search';
import { PostList } from '../index';

export const PostsFeed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { pathname } = location;

  const { posts } = useAppSelector((state) => state.post);

  const { data: allPosts, isLoading: postsLoading } = useGetPostsQuery();
  const { data: searchedPosts, isLoading: searchPostsLoading } =
    useSearchPostsQuery(
      {
        searchTerm,
      },
      {
        skip: !searchTerm.length,
      }
    );

  const mostLikedPosts = allPosts
    ?.filter((post: Post) => post.likes?.length > 0)
    .sort((a, b) => b.likes?.length - a.likes?.length);

  const mostCommentedPosts = allPosts
    ?.filter((post: Post) => post.comments?.length > 0)
    .sort((a, b) => b.comments?.length - a.comments?.length);


  const filterPath = pathname.substring(pathname.lastIndexOf('/') + 1);

  const postsToRender = () => {
    switch (filterPath) {
      case 'likes':
        return mostLikedPosts;
      case 'comments':
        return mostCommentedPosts;
      case 'oldest':
        return allPosts;
      case 'newest':
        return allPosts?.map((post: Post) => post).reverse();
      default:
        return posts;
    }
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') setSearchParams({});
    else setSearchParams({ search: e.target.value });
  };

  return (
    <PostList
      title={searchTerm ? `Search results for "${searchTerm}"` : ''}
      posts={searchTerm ? searchedPosts : postsToRender()}
      searchPosts={
        <Search
          placeholder="Search posts"
          searchTerm={searchTerm}
          setSearchTerm={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(e)
          }
        />
      }
    />
  );
};
