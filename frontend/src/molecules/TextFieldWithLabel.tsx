import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { SelectBox } from '../atoms';
export function TextFieldWithLabel({ error, label, inputRef, ...inputProps }) {
  return (
    <Grid item xs={12}>
      {inputProps.select ? (
        <SelectBox
          error={error ? true : undefined}
          helperText={error ? error : null}
          label={label}
          ref={inputRef}
          {...inputProps}
        />
      ) : (
        <TextField
          error={error ? true : undefined}
          helperText={error ? error : null}
          label={label}
          ref={inputRef}
          {...inputProps}
        />
      )}
    </Grid>
  );
}
