import React from 'react';
import { useField } from 'formik';
import Grid from '@material-ui/core/Grid';

import { RadioFieldWithLabel } from '../molecules';

export function RadioField(props) {
  const [field, meta] = useField(props);

  const error = meta.touched && meta.error ? meta.error : undefined;

  return (
    <Grid item xs={12}>
      <RadioFieldWithLabel error={error} {...field} {...props} />
    </Grid>
  );
}
