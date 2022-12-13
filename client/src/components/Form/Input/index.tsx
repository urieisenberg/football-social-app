import { useFormContext, Controller, FieldError } from 'react-hook-form';
import { useToggle } from '../../../hooks/useToggle';
import { PasswordEyes } from '../PasswordEyes';
import { InputIcons, InputIconsProps } from './Icons';
import {
  FormInputGroup,
  FormLabel,
  FormInput,
  FormGroup,
  FormError,
  FormCol,
} from '../styles';

interface InputProps extends InputIconsProps {
  errors: FieldError;
}

export const Input = ({ type, errors }: InputProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useToggle();

  return (
    <FormGroup>
      <FormLabel column>
        <InputIcons type={type} />
      </FormLabel>
      <FormCol>
        <FormInputGroup>
          <Controller
            name={type}
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                type={
                  type === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : type
                }
                className={`form-control ${errors && 'is-invalid'}`}
                placeholder={`Enter ${type}`}
              />
            )}
          />
          {type === 'password' && (
            <PasswordEyes
              setShowPassword={setShowPassword}
              showPassword={showPassword as boolean}
            />
          )}
          {errors && <FormError>{errors && errors.message}</FormError>}
        </FormInputGroup>
      </FormCol>
    </FormGroup>
  );
};
