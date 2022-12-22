import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from './services/server-api';
import { authApi } from './services/server-api/auth';
import { footballApi } from './services/football-api';
import authReducer from './services/server-api/actions/authSlice';
import ticketReducer from './services/server-api/actions/ticketSlice';
import noteReducer from './services/server-api/actions/noteSlice';
import postReducer from './services/server-api/actions/postSlice';
import commentReducer from './services/server-api/actions/commentSlice';
import userReducer from './services/server-api/actions/userSlice';

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, footballApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
