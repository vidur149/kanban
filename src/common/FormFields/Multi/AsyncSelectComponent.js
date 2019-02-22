import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { axiosInst, axiosConfig } from '../../../helper';
import { Option } from './Option';
import { Control } from './Control';
import { NoOptionsMessage } from './NoOptionsMessage';
import { Placeholder } from './Placeholder';
import { SingleValue } from './SingleValue';
import { MultiValue } from './MultiValue';
import { ValueContainer } from './ValueContainer';
import { multiStyles } from './styles';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import withTheme from '@material-ui/core/styles/withTheme';
import { debounce } from 'lodash';

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer
};

const debouncedFetch = debounce((inputValue, url, token, responseKey, callback) => {
  let uri = url + `${inputValue ? `?search=${inputValue}` : ''}`;
  axiosInst
    .get(uri, axiosConfig(token))
    .then(response => {
      const suggestions = response.data[responseKey];
      const maped_suggestions = suggestions.map(suggestion => ({
        value: suggestion.key,
        label: suggestion.value
      }));
      callback(maped_suggestions);
    })
    .catch(error => {
      callback(error);
    });
}, 500);

class AsyncSelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
  }

  getOptions(inputValue, callback) {
    const { url, responseKey, token } = this.props;
    // if (!inputValue || !inputValue.length > 2) {
    //   callback([]);
    // } else {
    debouncedFetch(inputValue, url, token, responseKey, callback);
    // }
  }

  render() {
    const {
      classes,
      multi,
      label,
      input,
      required,
      creatable,
      meta: { error, touched },
      placeholder,
      horizontalForm,
      horizontalFormWidth,
      formHelperText,
      leftAlign,
      theme
    } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        spacing={theme.breakpoints.down('md') ? 8 : 24}
      >
        <Grid
          item
          sm={
            (horizontalForm || horizontalFormWidth) &&
              horizontalFormWidth !== 12
              ? horizontalFormWidth
              : 12
          }
          sx={12}
          className={
            (horizontalForm || horizontalFormWidth) && !leftAlign
              ? classes.horizontalLabel
              : null
          }
        >
          <InputLabel
            required={required}
            error={touched && error ? true : false}
          >
            {label}
          </InputLabel>
        </Grid>
        <Grid
          item
          sm={
            (horizontalForm || horizontalFormWidth) &&
              horizontalFormWidth !== 12
              ? 12 - horizontalFormWidth
              : 12
          }
          xs={12}
        >
          <div className={classes.root}>
            <AsyncSelect
              classes={classes}
              components={components}
              isSearchable
              creatable={creatable}
              isClearable
              cacheOptions
              defaultOptions
              loadOptions={this.getOptions}
              value={input.value}
              onChange={input.onChange}
              placeholder={placeholder}
              isMulti={multi ? multi : false}
              error={touched && error ? error : undefined}
              helperText={formHelperText}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

AsyncSelectComponent.defaultProps = {
  horizontalForm: false
};
export default withTheme()(
  withStyles(multiStyles)(AsyncSelectComponent)
);
