import React from 'react';
import Typography from '@material-ui/core/Typography';

export function SingleValue(props) {
  return (
    <Typography
      style={{
        textTransform: 'capitalize'
      }}
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}
