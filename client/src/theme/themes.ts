export interface ThemeProps {
  background: string;
  text: string;
  primary: string;
  error: string;
  success: string;
  warning: string;
  info: string;
}
export const lightTheme: ThemeProps = {
  background: '#F2F2F2',
  text: '#000000',
  primary: '#000000',
  error: '#CF6679',
  success: '#00a600',
  warning: '#FF9100',
  info: '#2196F3',
};

export const darkTheme: ThemeProps = {
  background: '#000000',
  text: '#F2F2F2',
  primary: '#F2F2F2',
  error: '#CF6679',
  success: '#00a600',
  warning: '#FF9100',
  info: '#2196F3',
};
