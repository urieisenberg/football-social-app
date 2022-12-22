import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentState } from '../types';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    comment: null,
  } as CommentState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    updateComment: (state, action: PayloadAction<Comment>) => {
      const { _id, comment } = action.payload;
      const index = state.comments.findIndex((comment) => comment._id === _id);
      if (index >= 0) {
        state.comments[index] = { ...state.comments[index], comment };
      }
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      const index = state.comments.findIndex(
        (comment) => comment._id === action.payload
      );
      if (index >= 0) {
        state.comments.splice(index, 1);
      }
    },
  },
});

export const { setComments, updateComment, deleteComment } =
  commentSlice.actions;

export default commentSlice.reducer;
