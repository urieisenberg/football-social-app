import * as Yup from 'yup';

export const noteSchema = Yup.object().shape({
  text: Yup.string()
    .min(5, 'Note must be at least 5 characters')
    .max(50, 'Note must be less than 50 characters')
    .required('Note is required'),
});
