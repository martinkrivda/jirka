import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './styles/_app.scss';

function App() {
  return (
    <Router>
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
                <div className="flex flex-both-center mt-64 px-md-32">
                  <Container>
                    <h3>Login to fake</h3>
                  </Container>
                </div>
              </div>
            </div>
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
