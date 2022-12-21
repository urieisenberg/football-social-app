import { useEffect } from 'react';
import { useFormContext, Controller, FieldError } from 'react-hook-form';
import {
  FormShareContainer,
  FormShareButton,
  FormShareInput,
  FormShareError,
  FormShareAltInput,
  FormShareSubmit,
} from '../styles';
import { RiShareForwardFill, RiShareForwardLine } from 'react-icons/ri';

interface ShareProps {
  type: string;
  errors: FieldError;
  title: string;
  placeholder?: string;
}

export const Share = ({ type, placeholder, errors, title }: ShareProps) => {
  const { control, reset, formState } = useFormContext();

  useEffect(() => {
    if (formState.isSubmitted) reset();
  }, [formState.isSubmitted, reset]);

  return (
    <>
      <Controller
        name={title.includes('post') ? 'text' : 'comment'}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            {title.includes('post') ? (
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
            ) : (
              <>
                <FormShareAltInput
                  autoFocus
                  {...field}
                  type={title}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  placeholder={placeholder}
                />
                <FormShareSubmit type="submit">
                  {errors ? <RiShareForwardLine /> : <RiShareForwardFill />}
                </FormShareSubmit>
                {errors && <FormShareError>{errors.message}</FormShareError>}
              </>
            )}
          </>
        )}
      />
    </>
  );
};
