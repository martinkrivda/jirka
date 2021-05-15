import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export const RadioFieldWithLabel = ({
  data = [],
  error,
  label,
  color,
  inputRef,
  ...inputProps
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label={label} {...inputProps}>
        {data.map(({ value, label }) => (
          <FormControlLabel
            value={value}
            control={<Radio color={color} />}
            label={label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
