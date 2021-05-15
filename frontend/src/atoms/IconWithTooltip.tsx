import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  icon: {
    verticalAlign: 'middle',
    marginLeft: theme.spacing(0.4),
  },
  small: {
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
}));

export const IconWithTooltip = ({ helperText }) => {
  const classes = useStyles();
  return (
    <>
      <Tooltip className={classes.icon} title={helperText}>
        <HelpIcon className={classes.small} />
      </Tooltip>
    </>
  );
};
