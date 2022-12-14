import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useLoginMutation } from '../../../app/services/auth';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { setUser } from '../authSlice';
import { toast } from 'react-toastify';
import { LoginUser, User } from '../../../app/types';
import { Loader } from '../../../components/Loader';
import { Form } from '../../../components/Form';
import { loginSchema } from './loginSchema';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'loginError',
      });
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data as User));
      toast.success(`Welcome back ${data?.username}`, {
        toastId: 'loginSuccess',
      });
      navigate('/');
    }
  }, [isSuccess, navigate, data, dispatch]);

  const onSubmit = (data: LoginUser) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  if (isLoading) return <Loader />;

  return (
    <Form
      title="Login"
      formType="login"
      text="Please fill out the form below to login."
      schema={loginSchema}
      onSubmit={onSubmit}
    />
  );
};
