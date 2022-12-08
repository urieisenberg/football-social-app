import { darkTheme, lightTheme } from './themes';

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
