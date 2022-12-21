import { useEffect } from 'react';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IForm, FormErrors } from './types';
import { Transition } from '../Transition';
import { AuthForm } from './AuthForm';
import { CreateForm } from './CreateForm';

export const Form = ({
  title,
  text,
  schema,
  selectOptions,
  selectName,
  editable,
  onSubmit,
}: IForm) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (editable) reset(editable);
  }, [editable, reset]);

  useKeyPress('Enter', () => handleSubmit(onSubmit));
  useKeyPress('Escape', () => reset);

  return (
    <Transition>
      <FormProvider {...methods}>
        {title === 'Login' || title === 'Register' ? (
          <AuthForm
            title={title}
            text={text}
            selectOptions={selectOptions}
            selectName={selectName}
            errors={errors as FormErrors}
            onSubmit={handleSubmit(onSubmit)}
          />
        ) : (
          <CreateForm
            title={title}
            text={text}
            selectOptions={selectOptions}
            selectName={selectName}
            errors={errors as FormErrors}
            onSubmit={handleSubmit(onSubmit)}
          />
        )}
      </FormProvider>
    </Transition>
  );
};
