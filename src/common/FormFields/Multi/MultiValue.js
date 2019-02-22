import React from 'react';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';

export function MultiValue(props) {
  return (
    <Chip
      style={{
        textTransform: 'capitalize'
      }}
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={event => {
        props.removeProps.onClick();
        props.removeProps.onMouseDown(event);
      }}
    />
  );
}
