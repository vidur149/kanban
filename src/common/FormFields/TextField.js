import React from 'react';
import ReactDOM from 'react-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { StyledSelect } from './style';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class HorizontalTextField extends React.Component {
  constructor(props) {
    super(props);
    this.labelRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.variant === 'outlined') {
      this.labelNode = ReactDOM.findDOMNode(this.labelRef.current);
      this.forceUpdate();
    }
  }

  render() {
    const {
      input,
      label,
      placeholder,
      meta: { error, touched },
      className,
      FormHelperTextProps,
      helperText,
      id,
      inputProps,
      InputProps,
      inputRef,
      required,
      type,
      variant,
      select,
      children,
      labelWidth,
      disabled,
      alignItems,
      ...other
    } = this.props;

    const InputMore = {};

    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

    const InputElement = (
      <Input
        autoComplete={input.name}
        name={input.name}
        type={type}
        id={id}
        inputRef={inputRef}
        onChange={input.onChange}
        placeholder={placeholder}
        inputProps={inputProps}
        fullWidth={true}
        disabled={disabled}
        {...other}
        {...input}
        {...InputMore}
        {...InputProps}
      />
    );

    return (
      <FormControl
        aria-describedby={helperTextId}
        className={className}
        error={error && touched ? true : false}
        fullWidth={true}
        required={required}
        variant={variant}
        disabled={disabled}
      >
        <Grid
          container
          alignItems={alignItems || 'center'}
          spacing={label ? 8 : 0}
        >
          {label && (
            <Grid
              item
              xs={labelWidth ? labelWidth : 5}
              md={labelWidth ? labelWidth : 4}
            >
              <InputLabel
                disableAnimation
                shrink={false}
                htmlFor={id}
                ref={this.labelRef}
                style={{
                  position: 'unset'
                }}
              >
                {label}
              </InputLabel>
            </Grid>
          )}
          <Grid
            item
            xs={labelWidth ? (label ? 12 - labelWidth : 12) : 7}
            md={labelWidth ? (label ? 12 - labelWidth : 12) : 8}
          >
            {select ? (
              <StyledSelect
                IconComponent={!disabled ? ArrowDropDownIcon : () => null}
                value={input.value}
                input={InputElement}
                disabled={disabled}
              >
                {children}
              </StyledSelect>
            ) : (
              InputElement
            )}
            {error && touched && (
              <FormHelperText
                error={error && touched ? true : false}
                id={helperTextId}
                {...FormHelperTextProps}
              >
                {error && touched ? error : helperText}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </FormControl>
    );
  }
}

export default HorizontalTextField;
