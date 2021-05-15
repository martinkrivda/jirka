import React from 'react';
import { useField } from 'formik';
import Grid from '@material-ui/core/Grid';

import { FeelingRatingWithErrorBox } from '../molecules';

export function FeelingField(props) {
  const [field, meta] = useField(props);

  const error = meta.touched && meta.error ? meta.error : undefined;

  return (
    <Grid item xs={12}>
      <FeelingRatingWithErrorBox error={error} {...field} {...props} />
    </Grid>
  );
}
