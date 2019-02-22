import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'block',
    alignItems: 'center'
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  buttonProgress: {
    color: theme.colors.secondaryColor,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

class LoadingButton extends React.Component {
  render() {
    const { classes, submitting, disabled, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button {...rest} disabled={submitting || disabled}>
            {this.props.children}
            {submitting && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoadingButton);
