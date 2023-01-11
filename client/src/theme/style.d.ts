import 'styled-components';
import { ThemeProps } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
