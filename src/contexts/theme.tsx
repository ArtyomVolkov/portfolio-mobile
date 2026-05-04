import React, { useState, useContext, createContext } from 'react';
import THEME, { type TTheme, DEFAULT_THEME } from '@/constants/theme';

const ThemeContext = createContext({
  theme: THEME[DEFAULT_THEME],
  toggleTheme: () => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme[keyof TTheme]>(
    THEME[DEFAULT_THEME],
  );

  const toggleTheme = () => {
    setTheme(prev =>
      prev === THEME['light'] ? THEME['dark'] : THEME['light'],
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
