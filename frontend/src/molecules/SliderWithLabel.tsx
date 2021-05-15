import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 0,
    label: 'very easy',
  },
  {
    value: 50,
    label: 'moderate',
  },
  {
    value: 100,
    label: 'all out',
  },
];

function valuetext(value) {
  return `${value}`;
}

export const SliderWithLabel = ({ error, label, inputRef, ...inputProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        {label}
      </Typography>
      <Slider
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        {...inputProps}
      />
    </div>
  );
};
