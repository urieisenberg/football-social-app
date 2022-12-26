import { api } from '../../../app/services/server-api';
import {
  Post,
  CreatePost,
  SearchPosts,
  SearchUserPosts,
} from '../../../app/types';
import { store } from '../../../app/store';
import {
  setPosts,
  updatePost,
  deletePost,
  setLikedPosts,
  setTeamPosts,
  setUserPosts,
} from '../postSlice';

const URL = '/posts';

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `${URL}`,
      providesTags: [{ type: 'Post', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setPosts(result.data));
      },
    }),
    createPost: builder.mutation<Post, CreatePost>({
      query: (body) => ({
        url: `${URL}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'Post', id: 'LIST' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setPosts([...store.getState().post.posts, result.data]));
      },
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Post', id: 'LIST' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(deletePost(arg));
      },
    }),
    updatePost: builder.mutation<void, Pick<Post, '_id'> & Partial<Post>>({
      query: ({ _id, ...patch }) => ({
        url: `${URL}/${_id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: [
        { type: 'Post', id: 'LIST' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
        { type: 'Post', id: 'SEARCH' },
      ],
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(updatePost(result.data as unknown as Post));
      },
    }),
    getTeamPosts: builder.query<Post[], void>({
      query: () => `${URL}/team`,
      providesTags: [{ type: 'Post', id: 'TEAM' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setTeamPosts(result.data));
      },
    }),
    getLikedPost: builder.query<Post[], number>({
      query: () => `${URL}/liked`,
      providesTags: [{ type: 'Post', id: 'LIKED' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setLikedPosts(result.data));
      },
    }),
    getUserPosts: builder.query<Post[], string>({
      query: (username) => `${URL}/${username}`,
      providesTags: [{ type: 'Post', id: 'USER' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setUserPosts(result.data));
      },
    }),
    likePost: builder.mutation<Post, string>({
      query: (id) => ({
        url: `${URL}/${id}/like`,
        method: 'PUT',
      }),
      invalidatesTags: [
        { type: 'Post', id: 'LIST' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
        { type: 'Post', id: 'SEARCH' },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(updatePost(result.data as Post));
      },
    }),
    searchPosts: builder.query<Post[], SearchPosts>({
      query: ({ searchTerm }) => `${URL}/search/${searchTerm}`,
      providesTags: [{ type: 'Post', id: 'SEARCH' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setPosts(result.data));
      },
    }),
    searchUserPosts: builder.query<Post[], SearchUserPosts>({
      query: ({ searchTerm, username }) =>
        `${URL}/${username}/search/${searchTerm}`,
      providesTags: [{ type: 'Post', id: 'USER' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setUserPosts(result.data));
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetTeamPostsQuery,
  useGetLikedPostQuery,
  useGetUserPostsQuery,
  useLikePostMutation,
  useSearchPostsQuery,
  useSearchUserPostsQuery,
} = postsApi;
