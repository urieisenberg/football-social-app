import * as Yup from 'yup';

export const ticketSchema = Yup.object().shape({
  subject: Yup.string().oneOf(
    ['general', 'bug', 'feature', 'other'],
    'Subject is required'
  ),
  message: Yup.string()
    .required('Message is required')
    .min(5, 'Message must be at least 5 characters')
    .max(50, 'Message must be less than 50 characters'),
});
