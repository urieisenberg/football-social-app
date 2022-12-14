import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useRegisterMutation } from '../../../app/services/auth';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { setUser } from '../authSlice';
import { registerSchema } from './registerSchema';
import { RegisterUser, User } from '../../../app/types';
import { Form } from '../../../components/Form';
import { Loader } from '../../../components/Loader';
import { toast } from 'react-toastify';
import { teams } from '../../../utils/db/teams';

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [register, { data, isLoading, isSuccess, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'registerError',
      });
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data as User));
      toast.success(`Welcome ${data?.username}`, {
        toastId: 'registerSuccess',
      });
      navigate('/');
    }
  }, [isSuccess, navigate, data, dispatch]);

  const onSubmit = async (data: RegisterUser) => {
    await register({
      username: data.username,
      email: data.email,
      password: data.password,
      team: data.team,
    });
  };

  // const onSubmit = async (data: RegisterUser) => {
  //   try {
  //     register({
  //       username: data.username,
  //       email: data.email,
  //       password: data.password,
  //       team: data.team,
  //     });
  //   } catch (error) {
  //     const fetchError = error as FetchBaseQueryError;
  //     console.log('fetchError?.data', fetchError?.data)
  //     toast.error(fetchError?.data as string, {
  //       toastId: 'registerError',
  //     });
  //   }
  // };

  if (isLoading) return <Loader />;

  return (
    <Form
      formType="register"
      title="Register"
      schema={registerSchema}
      onSubmit={onSubmit}
      selectName="team"
      selectOptions={teams}
      text="Please fill out the form below and select a team to register."
    />
  );
};
