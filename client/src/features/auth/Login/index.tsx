import { useEffect } from 'react';
import { useLoginMutation } from '../api/auth';
import { useAuthActions } from '../../../hooks/useAuthActions';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';
import { LoginUser, User } from '../../../app/types';
import { Loader } from '../../../components/Loader';
import { Form } from '../../../components/Form';
import { loginSchema } from '../utils/loginSchema';

export const Login = () => {
  const { setUser } = useAuthActions();
  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      setUser(data as User);
      toast.success(`Welcome back ${data?.username}`, {
        toastId: 'loginSuccess',
      });
    } else if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'loginError',
      });
    }
  }, [isSuccess, data, setUser, error]);

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
      text="Please fill out the form below to login."
      schema={loginSchema}
      onSubmit={onSubmit}
    />
  );
};
