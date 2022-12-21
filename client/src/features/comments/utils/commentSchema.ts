import * as Yup from 'yup';

export const commentSchema = Yup.object().shape({
  comment: Yup.string()
    .min(2, 'comment must be at least 2 characters')
    .max(100, 'Post must be less than 50 characters'),
});
