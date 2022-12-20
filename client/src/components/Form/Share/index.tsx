import { useFormContext, Controller, FieldError } from 'react-hook-form';
import {
  FormShareContainer,
  FormShareButton,
  FormShareInput,
  FormShareError,
} from '../styles';
import { RiShareForwardFill, RiShareForwardLine } from 'react-icons/ri';

interface ShareProps {
  type: string;
  errors: FieldError;
  placeholder?: string;
}

export const Share = ({ type, placeholder, errors }: ShareProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={type}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormShareContainer>
            <FormShareInput
              {...field}
              type={type}
              onBlur={field.onBlur}
              onChange={field.onChange}
              placeholder={placeholder}
              className={` ${errors && 'is-invalid'}`}
            />
            <FormShareButton type="submit">
              {errors ? <RiShareForwardLine /> : <RiShareForwardFill />}
            </FormShareButton>{' '}
            {errors && <FormShareError>{errors.message}</FormShareError>}
          </FormShareContainer>
        )}
      />{' '}
    </>
  );
};
