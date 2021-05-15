import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const NotFoundPage = () => {
  const history = useHistory();
  return (
    <div className="flex flex-center flex-middle w-100 h-100vh">
      <div
        className="flex flex-column flex-center flex-middle"
        style={{ maxWidth: '320px' }}
      >
        <img
          className="mb-32"
          src="/assets/images/illustrations/404.svg"
          alt="404"
          width="100%"
        />
        <Button
          className="capitalize"
          variant="contained"
          color="primary"
          onClick={() => history.push('/')}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};
