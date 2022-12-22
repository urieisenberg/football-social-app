import { api } from '.';
import { CreateComment, Comment, DeleteComment } from '../../types';
import { store } from '../../store';
import {
  setComments,
  updateComment,
  deleteComment,
} from '../../actions/commentSlice';

const URL = '/comments';

export const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation<Comment, CreateComment>({
      query: ({ postId, comment }) => ({
        url: `posts/${postId + URL}`,
        method: 'POST',
        body: { comment },
      }),
      invalidatesTags: [
        { type: 'Comment', id: 'LIST' },
        { type: 'Comment', id: 'USER' },
        { type: 'Post', id: 'LIST' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(
          setComments([...store.getState().comment.comments, result.data])
        );
      },
    }),
    deleteComment: builder.mutation<void, DeleteComment>({
      query: ({ postId, commentId }) => ({
        url: `posts/${postId + URL}/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Comment', id: 'LIST' },
        { type: 'Comment', id: 'USER' },
        { type: 'Post', id: 'LIST' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(deleteComment(arg.commentId));
      },
    }),
    updateComment: builder.mutation<Comment, Comment>({
      query: ({ post: postId, _id, comment }) => ({
        url: `posts/${postId}/${URL}/${_id}`,
        method: 'PUT',
        body: { comment },
      }),
      invalidatesTags: [
        { type: 'Comment', id: 'LIST' },
        { type: 'Comment', id: 'USER' },
        { type: 'Post', id: 'List' },
        { type: 'Post', id: 'LIKED' },
        { type: 'Post', id: 'TEAM' },
        { type: 'Post', id: 'USER' },
      ],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        dispatch(updateComment(result.data));
      },
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentsApi;
