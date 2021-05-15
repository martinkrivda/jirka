import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SelectBox } from '../atoms';

export const SelectWithLabel = ({ error, label, inputRef, ...selectProps }) => {
  return (
    <Grid item xs={12}>
      <SelectBox
        error={error ? true : undefined}
        helperText={error ? error : null}
        label={label}
        ref={inputRef}
        {...selectProps}
      />
    </Grid>
  );
};
