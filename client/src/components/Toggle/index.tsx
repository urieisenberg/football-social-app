import { BsMoon, BsSun } from 'react-icons/bs';
import { Toggle } from './Toggle';

interface ThemeTogglerProps {
  toggleTheme: () => void;
  theme: string;
}

export const ThemeToggler = ({ toggleTheme, theme }: ThemeTogglerProps) => {
  return (
    <Toggle>
      {theme === 'light' ? (
        <BsMoon size={20} onClick={toggleTheme} style={{ color: "#ffffff" }} />
      ) : (
        <BsSun size={20} onClick={toggleTheme} />
      )}
    </Toggle>
  );
};
