import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import PATHNAMES from '../pathnames';
import { LanguageMenu, ToggleTheme } from '../atoms';

export const HeaderBase = ({ homeLinkTo, children }) => {
  //const { toggleThemeMode } = useContext(ThemeContext);
  return (
    <AppBar color="primary" elevation={0} position="static">
      <Toolbar>
        <Container className="px-0">
          <div className="flex flex-space-between flex-middle w-100 h-100">
            <div className="flex flex-middle">
              <LanguageMenu>
                <Hidden smDown>Language</Hidden>
              </LanguageMenu>
            </div>
            <div className="flex flex-middle">
              <ToggleTheme />
              {children}
            </div>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
