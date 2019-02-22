import React from 'react';
import TextField from '@material-ui/core/TextField';

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

export function Control(props) {
  return (
    <TextField
      fullWidth
      error={props.selectProps.error ? true : false}
      helperText={
        props.selectProps.error
          ? props.selectProps.error
          : props.selectProps.helperText
      }
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
    />
  );
}
