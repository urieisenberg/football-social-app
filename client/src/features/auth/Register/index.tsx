import { useEffect } from 'react';
import { useRegisterMutation } from '../../../app/services/auth';
import { useAuthActions } from '../../../hooks/useAuthActions';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { registerSchema } from './registerSchema';
import { RegisterUser, User } from '../../../app/types';
import { Form } from '../../../components/Form';
import { Loader } from '../../../components/Loader';
import { toast } from 'react-toastify';
import { teams } from '../../../utils/db/teams';

export const Register = () => {
  const { setUser } = useAuthActions();
  const [register, { data, isLoading, isSuccess, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      setUser(data as User);
      toast.success(`Welcome ${data?.username}`, {
        toastId: 'registerSuccess',
      });
    } else if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'registerError',
      });
    }
  }, [isSuccess, data, setUser, error]);

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
      title="Register"
      schema={registerSchema}
      onSubmit={onSubmit}
      selectName="team"
      selectOptions={teams}
      text="Please fill out the form below and select a team to register."
    />
  );
};
