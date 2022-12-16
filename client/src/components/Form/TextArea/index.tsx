import { useFormContext, Controller, FieldError } from 'react-hook-form';
import { FormTextArea, FormError } from '../styles';

interface TextAreaProps {
  type: string;
  errors: FieldError;
  placeholder?: string;
}

export const TextArea = ({ type, placeholder, errors }: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={type}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormTextArea
            {...field}
            onBlur={field.onBlur}
            onChange={field.onChange}
            placeholder={
              placeholder ? placeholder : `Enter your ${type} here...`
            }
            className={`form-control ${errors && 'is-invalid'}`}
          />
        )}
      />
      {errors && <FormError>{errors.message}</FormError>}
    </>
  );
};
