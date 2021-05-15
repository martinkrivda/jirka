import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export const SelectBox = ({ data = [], ...props }) => {
  return (
    <TextField {...props} key={props.id} label={props.id}>
      {data.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};
