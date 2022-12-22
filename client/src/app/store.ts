import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from './services/server-api';
import { footballApi } from './services/football-api';
import { authApi } from './services/server-api/auth';
import authReducer from './actions/authSlice';
import ticketReducer from './actions/ticketSlice';
import noteReducer from './actions/noteSlice';
import postReducer from './actions/postSlice';
import commentReducer from './actions/commentSlice';
import userReducer from './actions/userSlice';

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
