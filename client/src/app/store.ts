import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from './services/server-api';
import { authApi } from '../features/auth/api/auth';
import { footballApi } from './services/football-api';
import authReducer from '../features/auth/authSlice';
import ticketReducer from '../features/tickets/ticketSlice';
import noteReducer from '../features/notes/noteSlice';
import postReducer from '../features/posts/postSlice';
import commentReducer from '../features/comments/commentSlice';
import userReducer from '../features/users/userSlice';
import teamReducer from '../features/teams/teamSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [api.reducerPath]: api.reducer,
    [footballApi.reducerPath]: footballApi.reducer,
    ticket: ticketReducer,
    note: noteReducer,
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
    team: teamReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, footballApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
