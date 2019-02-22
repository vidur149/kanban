import React from 'react';

export function ValueContainer(props) {
  return (
    <div
      className={props.selectProps.classes.valueContainer}
      {...props.innerProps}
    >
      {props.children}
    </div>
  );
}
