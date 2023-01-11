import * as Yup from 'yup';

export const ticketSchema = Yup.object().shape({
  subject: Yup.string()
    .oneOf(['general', 'bug', 'feature', 'other'])
    .required('Subject is required'),
  message: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(50, 'Description must be less than 50 characters'),
});
