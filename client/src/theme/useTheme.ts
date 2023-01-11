import { useLocalStorage } from '../app/hooks/useLocalStorage';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return { theme, toggleTheme };
};


