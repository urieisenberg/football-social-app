import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../../app/services/auth';
import { User } from '../../app/types';
import { RootState } from '../../app/store';

interface AuthState {
  user: User | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  } as AuthState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
