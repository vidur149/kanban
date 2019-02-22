import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "recompose";
import { formSubmit } from "./submit";
import { addTask } from "../duck/actions";

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  };
};

const FormHandlers = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  reduxForm({
    form: "task-form",
    onSubmit: formSubmit
  })
);

export default FormHandlers;
