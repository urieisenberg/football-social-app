import * as Yup from 'yup';

export const postSchema = Yup.object().shape({
  text: Yup.string()
    .required('')
    .min(2, 'Post must be at least 2 characters')
    .max(100, 'Post must be less than 100 characters'),
});
