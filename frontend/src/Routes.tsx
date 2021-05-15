import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PATHNAMES from './pathnames';

import { DashboardPage, NotFoundPage, SignInPage } from './pages';

export function Routes() {
  return (
    <Switch>
      <Route exact path={PATHNAMES.signIn()} component={SignInPage} />
      <Route exact path={PATHNAMES.dashboard()} component={DashboardPage} />
      {/* Not found route */}
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
