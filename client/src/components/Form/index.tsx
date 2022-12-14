import { useForm, FormProvider, FieldError } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { teams } from '../../utils/db/teams';
import { Input } from './Input';
import { Select } from './Select';
import { Link } from './Link';
import { Transition } from '../Transition';
import { Button, HomeButton, BackButton } from '../Button';
import {
  FormWrapper,
  FormContainer,
  FormContent,
  FormTitle,
  FormText,
} from './styles';

interface FormProps {
  formType: 'register' | 'login';
  title: string;
  text: string;
  schema: AnyObjectSchema;
  onSubmit: (data: any) => void;
}

export const Form = ({
  formType,
  title,
  text,
  schema,
  onSubmit,
}: FormProps) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <Transition>
      <BackButton />
      <HomeButton />
      <FormProvider {...methods}>
        <FormWrapper>
          <FormContainer>
            <FormContent onSubmit={handleSubmit(onSubmit)}>
              <FormTitle>
                <h1>{title}</h1>
                <FormText>{text}</FormText>
              </FormTitle>
              {formType === 'register' && (
                <Input type="username" errors={errors.username as FieldError} />
              )}
              <Input type="email" errors={errors.email as FieldError} />
              <Input type="password" errors={errors.password as FieldError} />
              {formType === 'register' && (
                <Select
                  name="team"
                  // options={teams.map((team) => ({
                  //   value: team.id,
                  //   label: team.name,
                  //   image: team.logo,
                  // }))}
                  options={teams}
                  errors={errors.team as FieldError}
                />
              )}
              <Button text={formType.toUpperCase()} />
              <Link type={formType} />
            </FormContent>
          </FormContainer>
        </FormWrapper>
      </FormProvider>
    </Transition>
  );
};
