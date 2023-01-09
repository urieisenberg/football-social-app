import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../../../app/hooks/useAppSelector';
import { useGetUserPostsQuery, useSearchUserPostsQuery } from '../../../api';
import { Search } from '../../../../../components/Search';
import { PostList } from '../../index';

export const UserPosts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const { user } = useAppSelector((state) => state.user);

  const { data: posts, isLoading: postsLoading } = useGetUserPostsQuery(
    user?.username as string
  );

  const { data: searchedPosts, isLoading: searchPostsLoading } =
    useSearchUserPostsQuery(
      {
        searchTerm: searchTerm,
        username: user?.username as string,
      },
      {
        skip: !searchTerm.length,
      }
    );

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') setSearchParams({});
    else setSearchParams({ search: e.target.value });
  };

  return (
    <PostList
      posts={searchTerm.length ? searchedPosts : posts}
      title={
        searchTerm.length
          ? `Search results for "${searchTerm} in 
            ${user?.username}'s posts"`
          : `${user?.username}'s posts`
      }
      searchPosts={
        <Search
          placeholder={`Search ${user?.username}'s posts`}
          searchTerm={searchTerm}
          setSearchTerm={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(e)
          }
        />
      }
    />
  );
};
