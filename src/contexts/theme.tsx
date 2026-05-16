import React, { useState, useContext, createContext } from 'react';
import THEME, { type TTheme, DEFAULT_THEME } from '@/constants/theme';
import AsyncStorage from '@/services/AsyncStorage';

const ThemeContext = createContext({
  theme: THEME[DEFAULT_THEME],
  toggleTheme: () => {},
  setTheme: (name: keyof TTheme) => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<TTheme[keyof TTheme]>(
    THEME[DEFAULT_THEME],
  );

  const toggleTheme = () => {
    const newTheme = theme.name === 'light' ? 'dark' : 'light';

    setTheme(THEME[newTheme]);

    AsyncStorage.setItem('selectedTheme', newTheme).catch(error => {
      console.error('Failed to save theme to storage:', error);
    });
  };

  const setThemeByName = (themeName: keyof TTheme) => {
    setTheme(THEME[themeName]);
    AsyncStorage.setItem('selectedTheme', themeName).catch(error => {
      console.error('Failed to save theme to storage:', error);
    });
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: setThemeByName }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
