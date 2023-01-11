import { User, RegisterUser, LoginUser } from '../../../app/types';
import { api } from '../../../app/services/server-api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<User, RegisterUser>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation<User, LoginUser>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
