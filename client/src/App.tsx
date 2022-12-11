import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/global';
import { lightTheme, darkTheme } from './theme/themes';
import { useTheme } from './hooks/useTheme';
import { ThemeToggler } from './components/Toggle';
import { Routes } from './routes/Routes';

function App() {
  const { theme, toggleTheme } = useTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <ThemeToggler toggleTheme={toggleTheme} theme={theme} />
        <AnimatePresence>
          <Routes />
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
