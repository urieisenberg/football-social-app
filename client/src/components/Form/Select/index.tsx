import { useFormContext, Controller, FieldError } from 'react-hook-form';
import ReactSelect from 'react-select';
import { useTheme } from 'styled-components';
import { ThemeProps } from '../../../theme/themes';
import { selectStyles } from './styles';
import { Options } from './Options';
import { Value } from './Value';
import { FormGroup, FormLabel, FormCol, FormError } from '../styles';
import { GiSoccerBall } from 'react-icons/gi';

interface Option {
  label: string;
  value: string | number;
  image?: string;
}

interface TeamOption {
  name: string;
  id: string | number;
  logo: string;
}

export type SelectOptions = Option[] | TeamOption[];

interface SelectProps {
  name: string;
  options: SelectOptions
  errors: FieldError;
}

export const Select = ({ name, options, errors }: SelectProps) => {
  const { control } = useFormContext();
  const currentTheme = useTheme() as ThemeProps;

  // const teamOptions = options.map((option) => ({
  //   name: option.label,
  //   id: option.value,
  //   logo: option.image,
  // }));

  return (
    <FormGroup>
      <FormLabel column>
        {name === 'team' && <GiSoccerBall size={22} />}
      </FormLabel>
      <FormCol>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <ReactSelect
              options={options}
              onChange={(optionSelected) => onChange(optionSelected)}
              styles={selectStyles}
              onBlur={onBlur}
              menuPlacement="top"
              isSearchable={false}
              placeholder={`Select your ${
                name.charAt(0).toUpperCase() + name.slice(1)
              }`}
              className={`${errors && 'is-invalid'}`}
              components={{ SingleValue: Value, Option: Options }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  neutral0: currentTheme.background,
                  primary25: currentTheme.text,
                  primary: currentTheme.text,
                },
              })}
            />
          )}
        />
        <FormError>
          {errors && name === 'team'
            ? 'Please select a team'
            : errors && errors.message}
        </FormError>
      </FormCol>
    </FormGroup>
  );
};
