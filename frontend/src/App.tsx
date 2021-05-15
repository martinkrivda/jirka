import React, { useEffect, Suspense } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import { keepTheme, useDarkMode, DarkThemeProvider } from './utils';
import { AppBar, Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './styles/_app.scss';

import { ScrollToTop } from './atoms';
import { AuthProvider } from './utils/auth';
import { Routes } from './Routes';
import { config } from './config';

function App() {
  const [themeObject, toggleDarkMode, setThemeObject] = useDarkMode();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const muiTheme = createMuiTheme(themeObject);
  useEffect(() => {
    keepTheme(prefersDarkMode, setThemeObject);
  }, [prefersDarkMode, setThemeObject]);
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AllProviders toggleDarkMode={toggleDarkMode}>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route exact path="/signup">
            <>
              <div className="flex flex-md-wrap pb-24">
                <div className="w-100 px-64 p-md-0 w-md-100">
                  <AppBar>kokok</AppBar>
                  <div className="flex flex-space-between flex-middle pt-24 px-md-16 w-100">
                    <div className="flex flex-space-between w-100">
                      <div className="position-relative flex flex-middle">
                        dss
                      </div>
                      <div className="flex flex-middle text-align-right">
                        Login
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-both-center mt-64 px-md-32"></div>
                </div>
              </div>
              <Container maxWidth="xs">
                <h3>Login to fake</h3>
                <Paper elevation={3} variant="outlined" square>
                  jihihi
                </Paper>
              </Container>
            </>
          </Route>
        </Switch>
        <Routes />
      </AllProviders>
    </ThemeProvider>
  );
}

function AllProviders({ toggleDarkMode, children }) {
  const httpLink = new HttpLink({ uri: config.BASE_API_URL });
  const authLink = setContext(async (req, { headers }) => {
    const token = localStorage.getItem('token');

    return {
      ...headers,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  const link = authLink.concat(httpLink as any);
  const client = new ApolloClient({
    link: link as any,
    cache: new InMemoryCache(),
  });
  return (
    <Suspense fallback={<LinearProgress />}>
      <AuthProvider>
        <ApolloProvider client={client}>
          <DarkThemeProvider value={toggleDarkMode}>
            <Router>
              <ScrollToTop />
              {children}
            </Router>
          </DarkThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
