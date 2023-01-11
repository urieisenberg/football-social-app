import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../../app/types';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    post: null,
    teamPosts: [],
    likedPosts: [],
    userPosts: [],
  } as PostState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const { _id, text } = action.payload;
      const index = state.posts.findIndex((post) => post._id === _id);
      if (index >= 0) {
        state.posts[index] = { ...state.posts[index], text };
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const index = state.posts.findIndex(
        (post) => post._id === action.payload
      );
      if (index >= 0) {
        state.posts.splice(index, 1);
      }
    },
    setTeamPosts: (state, action: PayloadAction<Post[]>) => {
      state.teamPosts = action.payload;
    },
    setLikedPosts: (state, action: PayloadAction<Post[]>) => {
      state.likedPosts = action.payload;
    },
    setUserPosts: (state, action: PayloadAction<Post[]>) => {
      state.userPosts = action.payload;
    },
  },
});

export const {
  setPosts,
  updatePost,
  deletePost,
  setLikedPosts,
  setTeamPosts,
  setUserPosts,
} = postSlice.actions;
export default postSlice.reducer;
