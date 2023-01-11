import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavFixtures, User, UserState } from '../../app/types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    following: [],
    followers: [],
    favFixtures: [],
  } as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
      localStorage.clear();
    },
    followUser: (state, action: PayloadAction<User[]>) => {
      state.following = action.payload;
    },
    unfollowUser: (state, action: PayloadAction<User[]>) => {
      state.following = action.payload;
    },
    setFollowing: (state, action: PayloadAction<User[]>) => {
      state.following = action.payload;
    },
    setFollowers: (state, action: PayloadAction<User[]>) => {
      state.followers = action.payload;
    },
    saveFavFixtures: (state, action: PayloadAction<FavFixtures[]>) => {
      state.favFixtures = action.payload;
    },
  },
});

export const {
  setUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
  setFollowing,
  setFollowers,
  saveFavFixtures,
} = userSlice.actions;
export default userSlice.reducer;
