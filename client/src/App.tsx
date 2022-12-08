import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/global';
import { lightTheme, darkTheme } from './theme/themes';
import { useTheme } from './hooks/useTheme';
import { ThemeToggler } from './components/Toggle';

function App() {
  const { theme, toggleTheme } = useTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ThemeToggler toggleTheme={toggleTheme} theme={theme} />
      <AnimatePresence></AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
