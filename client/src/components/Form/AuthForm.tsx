import { FormProps, SelectOptions } from './types';
import { Button, HomeButton, BackButton } from '../Button';
import {
  FormWrapper,
  FormContainer,
  FormContent,
  FormTitle,
  FormText,
} from './styles';
import { Input } from './Input';
import { Select } from './Select';
import { Link } from './Link';

export const AuthForm = ({
  title,
  text,
  selectOptions,
  selectName,
  errors,
  onSubmit,
}: FormProps) => {
  return (
    <>
      <BackButton />
      <HomeButton />
      <FormWrapper>
        <FormContainer>
          <FormContent onSubmit={onSubmit}>
            <FormTitle>
              <h1>{title}</h1>
              <FormText>{text}</FormText>
            </FormTitle>
            {title === 'Register' && (
              <Input type="username" errors={errors.username} />
            )}
            <Input type="email" errors={errors.email} />
            <Input type="password" errors={errors.password} />
            {title === 'Register' && (
              <Select
                options={selectOptions as SelectOptions}
                name={selectName as string}
                errors={errors.team}
              />
            )}
            <Button text={title.toUpperCase()} />
            <Link type={title.toLowerCase() as 'login' | 'register'} />
          </FormContent>
        </FormContainer>
      </FormWrapper>
    </>
  );
};
