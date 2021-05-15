import React from 'react';
import { withRouter } from 'react-router-dom';

import { HeaderBase } from '../molecules/HeaderBase';
import PATHNAMES from '../pathnames';

const LoggedInHeaderBase = () => {
  return <HeaderBase homeLinkTo={PATHNAMES.empty()}>ddf</HeaderBase>;
};

export const LoggedInHeader = withRouter(LoggedInHeaderBase);
