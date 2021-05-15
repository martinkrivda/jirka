import React from 'react';
import { FeelingRating } from '../atoms';
export function FeelingRatingWithErrorBox({
  error,
  label,
  inputRef,
  ...inputProps
}) {
  return (
    <FeelingRating
      defaultValue="0"
      error={error ? true : undefined}
      helperText={error ? error : null}
      label={label}
      ref={inputRef}
      {...inputProps}
    />
  );
}
