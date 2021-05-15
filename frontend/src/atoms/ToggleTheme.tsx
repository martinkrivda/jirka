import React, { useEffect, useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { setTheme } from '../utils/themes';
import { DarkThemeContext } from '../utils/';

export const ToggleTheme = () => {
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem('theme');
  const toggleDarkMode = useContext(DarkThemeContext);
  console.log(togClass);

  const handleOnClick = () => {
    toggleDarkMode();
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setTogClass('light');
    } else {
      setTheme('theme-dark');
      setTogClass('dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogClass('dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTogClass('light');
    }
  }, [theme]);

  return (
    <IconButton onClick={handleOnClick}>
      <Brightness4Icon />
    </IconButton>
  );
};
