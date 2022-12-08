import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(1024, 'Password must be less than 1024 characters')
    .required('Password is required'),
  email: Yup.string()
    .email('Email must be a valid email')
    .min(6, 'Email must be at least 6 characters')
    .max(50, 'Email must be less than 50 characters')
    .required('Email is required'),
  team: Yup.object().shape({
    name: Yup.string().required(),
    id: Yup.number().required(),
    logo: Yup.string().required(),
  }),
});
