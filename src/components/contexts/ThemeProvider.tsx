import React, { createContext, useLayoutEffect } from 'react';
import { useLocalStorage } from '../../hooks';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = createContext<ThemeContextType | undefined>(
  undefined,
);

const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [_theme, _setTheme] = useLocalStorage<Theme>('theme', 'light');

  useLayoutEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(_theme);
  }, [_theme]);

  const setTheme = (theme: Theme) => {
    _setTheme(theme);
  };

  const toggleTheme = () => {
    _theme === 'light' ? _setTheme('dark') : _setTheme('light');
  };

  return (
    <ThemeContextProvider.Provider
      value={{
        theme: _theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};

export default ThemeProvider;
