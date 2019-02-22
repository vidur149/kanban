export const formSubmit = (values, dispatch, props) => {
  const { addTask, reset } = props;
  addTask(values.task);
  reset();
};
