import React from "react";
import { Field } from "redux-form";
import Grid from "@material-ui/core/Grid";
import TextField from "../../common/FormFields/TextField";
import LoadingButton from "../../common/LoadingButton/LoadingButton";

const validate = (value, allValues, props) => {
  let error = "";
  if (!value) {
    error = "Required";
  }
  return error;
};

const FormPure = props => {
  const { submitting, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="center" spacing={16} alignItems="center">
        <Grid item xs={4}>
          <Field
            name="task"
            labelWidth={4}
            validate={validate}
            component={TextField}
            label="Task"
          />
        </Grid>
        <Grid item xs={"auto"} align="center">
          <LoadingButton
            variant="outlined"
            color="secondary"
            type={"submit"}
            submitting={submitting}
            fullWidth
          >
            ADD TASK
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormPure;
