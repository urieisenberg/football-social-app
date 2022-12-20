import { FormProps, SelectOptions } from './types';
import { Button } from '../Button';
import {
  FormContainer,
  FormContent,
  FormShare,
  FormText,
  FormTitle,
} from './styles';
import { Select } from './Select';
import { TextArea } from './TextArea';
import { Share } from './Share';

export const CreateForm = ({
  title,
  text,
  selectOptions,
  selectName,
  errors,
  onSubmit,
}: FormProps) => {
  let formContent = text.includes('ticket') ? (
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
  ) : title.includes('post') ? (
    <FormShare onSubmit={onSubmit}>
      <Share type="text" placeholder={text} errors={errors.text} />
    </FormShare>
  ) : (
    <FormContent onSubmit={onSubmit}>
      <TextArea type="text" placeholder={text} errors={errors.text} />
      <Button text={title.toUpperCase()} />
    </FormContent>
  );

  return formContent;
};
