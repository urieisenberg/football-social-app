import { AnyObjectSchema } from 'yup';
import { FieldError } from 'react-hook-form';

export interface SelectOption {
  label: string;
  value: string | number;
  image?: string;
}

export interface SelectTeamOption {
  name: string;
  id: string | number;
  logo: string;
}

export type SelectOptions = SelectOption[] | SelectTeamOption[];

export interface SelectProps {
  name: string;
  options: SelectOptions;
  errors: FieldError;
}

export interface IForm extends Omit<FormProps, 'errors'> {
  schema: AnyObjectSchema;
}

export interface FormProps {
  title: string;
  text: string;
  errors: Record<string, FieldError>;
  selectName?: string;
  selectOptions?: SelectOptions;
  editable?: any;
  onSubmit: (data: any) => void;
}

export type FormErrors = {
  [key: string]: FieldError;
};
