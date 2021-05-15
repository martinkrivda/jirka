import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export const TextWithTooltip = ({ text, label, children, arrow }) => (
  <Tooltip
    title={text}
    aria-label={label}
    placement="bottom-start"
    arrow={arrow}
  >
    <Typography align="center" variant="inherit">
      {children}
    </Typography>
  </Tooltip>
);
