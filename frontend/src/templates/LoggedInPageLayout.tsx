import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LoggedInHeader } from '../organisms';

export function LoggedInPageLayout({ children, errorList }) {
  const history = useHistory();
  return (
    <main className="content">
      <LoggedInHeader />
      {children}
    </main>
  );
}
