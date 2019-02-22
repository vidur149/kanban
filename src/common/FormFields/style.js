import React from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';

export const StyledSelect = styled(({ ...other }) => (
  <Select
    {...other}
    classes={{
      select: 'disabled-select'
    }}
  />
))`
  && .disabled-select {
    padding-right: ${props => (props.disabled ? 0 : '')};
  }
`;
