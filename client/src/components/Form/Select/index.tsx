import { useFormContext, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { SelectProps } from '../types';
import { useTheme } from 'styled-components';
import { ThemeProps } from '../../../theme/themes';
import { selectStyles } from './styles';
import { Options } from './Options';
import { Value } from './Value';
import { FormGroup, FormLabel, FormCol, FormError } from '../styles';
import { GiSoccerBall } from 'react-icons/gi';

export const Select = ({ name, options, errors }: SelectProps) => {
  const { control } = useFormContext();
  const currentTheme = useTheme() as ThemeProps;

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
              onChange={(optionSelected: any) =>
                name === 'team'
                  ? onChange(optionSelected)
                  : onChange(optionSelected.value)
              }
              styles={selectStyles}
              onBlur={onBlur}
              menuPlacement="top"
              isSearchable={false}
              placeholder={`Select a ${
                name.charAt(0).toUpperCase() + name.slice(1)
              }`}
              className={`${errors && 'is-invalid'}`}
              components={{ Option: Options, SingleValue: Value }}
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
