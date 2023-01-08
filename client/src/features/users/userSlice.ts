import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavFixtures, User, UserState } from '../../app/types';

const localStorageUser = JSON.parse(localStorage.getItem('user') || 'null');

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
    },
    followUser: (state, action: PayloadAction<User>) => {
      state.following.push(action.payload);
      localStorageUser.following.push(action.payload);
      localStorage.setItem('user', JSON.stringify(localStorageUser));
    },
    unfollowUser: (state, action: PayloadAction<User>) => {
      // const index = state.following.findIndex(
      //   (user) => user._id === action.payload._id
      // );
      // state.following.splice(index, 1);
      localStorageUser.following.splice(
        localStorageUser.following.indexOf(action.payload),
        1
      );
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
