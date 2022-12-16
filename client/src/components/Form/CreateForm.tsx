import { FormProps, SelectOptions } from './types';
import { Button } from '../Button';
import { FormContainer, FormContent, FormText, FormTitle } from './styles';
import { Select } from './Select';
import { TextArea } from './TextArea';

export const CreateForm = ({
  title,
  text,
  selectOptions,
  selectName,
  errors,
  onSubmit,
}: FormProps) => {
  return (
    <FormContainer>
      <FormContent onSubmit={onSubmit}>
        <FormTitle>
          <h1>{title}</h1>

          <FormText>{text}</FormText>
        </FormTitle>
        <Select
          options={selectOptions as SelectOptions}
          name={selectName as string}
          errors={errors.subject}
        />
        <TextArea
          type="message"
          placeholder="Enter your ticket description here..."
          errors={errors.message}
        />
        <Button text={title.toUpperCase()} />
      </FormContent>
    </FormContainer>
  );
};
