import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    letterSpacing: '1px',
    'media (min-width: 576px)': {
      textAlign: 'left',
    },
    'media (max-width: 576px)': {
      textAlign: 'center',
      letterSpacing: '2px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? 700 : 500,
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: state.theme.colors.primary25,
      color: state.theme.colors.neutral0,
      fontWeight: 700,
      letterSpacing: '1px',
    },
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
    height: '100vh',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
  menuList: (provided, state) => ({
    ...provided,
    '::-webkit-scrollbar': {
      width: '10px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: state.theme.colors.neutral0,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'state.theme.colors.primary25',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'state.theme.colors.primary25',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '1.5rem',
    '@media (max-width: 576px)': {
      textAlign: 'center',
      letterSpacing: '2px',
      width: '100%',
    },
    '@media (min-width: 576px)': {
      textAlign: 'left',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    textAlign: 'left',
    '@media (max-width: 576px)': {
      textAlign: 'center',
      letterSpacing: '2px',
    },
  }),
};
