import { useState, createContext } from 'react';
import { PaletteType } from '@material-ui/core';
import { themeConfig } from './themes';

export const useDarkMode = () => {
  const [themeObject, setThemeObject] = useState(themeConfig);
  const {
    palette: { type },
  } = themeObject;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...themeObject,
      palette: {
        ...themeObject.palette,
        type: (type === 'light' ? 'dark' : 'light') as PaletteType,
      },
    };
    setThemeObject(updatedTheme);
  };

  return [themeObject, toggleDarkMode, setThemeObject] as const;
};

export const DarkThemeContext = createContext(() => {});

export const DarkThemeProvider = DarkThemeContext.Provider;
