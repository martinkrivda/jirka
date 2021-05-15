import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
export function CheckBoxWithLabel({ error, label, inputRef, ...inputProps }) {
  return (
    <Grid item xs={12}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox ref={inputRef} {...inputProps} />}
          label={label}
        />
        <FormHelperText error={error ? true : false}>{error}</FormHelperText>
      </FormGroup>
    </Grid>
  );
}
