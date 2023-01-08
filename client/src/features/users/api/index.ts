import { api } from '../../../app/services/server-api';
import { User } from '../../../app/types';
import { store } from '../../../app/store';
import {
  setUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
  setFollowing,
  setFollowers,
  saveFavFixtures,
} from '../userSlice';

const URL = '/users';

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (username) => `${URL}/${username}`,
      providesTags: [{ type: 'User', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setUser(result.data));
      },
    }),
    updateUser: builder.mutation<User, User>({
      query: (body) => ({
        url: URL,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(updateUser(result.data));
      },
    }),
    deleteUser: builder.mutation<void, void>({
      query: () => ({
        url: URL,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(deleteUser(result.data));
      },
    }),
    getFollowing: builder.query<User[], string>({
      query: (id) => `${URL + '/' + id}/following/`,
      providesTags: [{ type: 'User', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(setFollowing(result.data));
      },
    }),
    getFollowers: builder.query<User[], string>({
      query: (id) => `${URL + '/' + id}/followers/`,
      providesTags: [{ type: 'User', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        console.log(result.data);
        dispatch(setFollowers(result.data));
      },
    }),
    followUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `${URL}/follow/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        console.log(result.data);
        dispatch(followUser(result.data));
      },
    }),
    unfollowUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `${URL}/unfollow/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }, { type: 'Post' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(unfollowUser(result.data));
      },
    }),
    // saveFavFixtures: builder.mutation<User, []>({
    //   query: (fixtures) => ({
    //     url: `${URL}/save-fav-fixtures`,
    //     method: 'PUT',
    //     body: fixtures,
    //   }),
    //   invalidatesTags: [{ type: 'User', id: 'LIST' }],
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     const result = await queryFulfilled;
    //     dispatch(saveFavFixtures(result.data));
    //   },
    // }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetFollowingQuery,
  useGetFollowersQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = usersApi;
