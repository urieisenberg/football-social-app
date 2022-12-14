import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { authApi } from './services/auth';
import authReducer from '../features/auth/authSlice';
import ticketReducer from '../features/tickets/ticketsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    ticket: ticketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
