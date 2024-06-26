import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const themes = {
  light: {
    background: '#fff',
    text: '#000',
    icon: '#000',
  },
  dark: {
    background: '#000435',
    text: '#fff',
    icon: '#fff',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = {
    backgroundColor: isDarkTheme ? '#0D0D0D' : '#fff',
    textColor: isDarkTheme ? '#fff' : '#000',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
