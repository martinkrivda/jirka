import _palette from './_palette.module.scss';
import { PaletteType } from '@material-ui/core';

export const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

export const keepTheme = (prefersDarkMode, setThemeObject) => {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      setThemeObject({
        palette: {
          type: 'dark',
        },
      });
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light');
      setThemeObject({
        palette: {
          type: 'light',
        },
      });
    }
  } else {
    const mode = prefersDarkMode ? 'theme-dark' : 'theme-light';
    setTheme(mode);
    setThemeObject({
      palette: {
        type: mode === 'theme-dark' ? 'dark' : 'light',
      },
    });
  }
};

export const themeConfig = {
  palette: {
    type: 'light' as PaletteType,
    primary: {
      main: _palette.primary,
    },
    secondary: {
      main: _palette.secondary,
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
};
