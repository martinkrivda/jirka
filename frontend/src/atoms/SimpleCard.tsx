import React from 'react';
import { Card, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    float: 'left',
    marginRight: theme.spacing(1),
  },
}));

export const SimpleCard = ({ children, title, subtitle, actionButton }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card elevation={6} className="px-24 py-20 h-100">
      {actionButton && (
        <IconButton
          className={classes.iconButton}
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <div className="card-title">{title}</div>
      <div className="card-subtitle mb-24">{subtitle}</div>
      {children}
    </Card>
  );
};
