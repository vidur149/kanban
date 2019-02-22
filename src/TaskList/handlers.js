import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { moveTask } from "./duck";

const mapDispatchToProps = dispatch => {
  return {
    moveTask: (index, action) => dispatch(moveTask(index, action))
  };
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
};

const TaskHandlers = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    handleDragEnd: props => param => {
      const { moveTask } = props;
      if (param && param.destination) {
        const {
          destination: { droppableId },
          draggableId
        } = param;
        if (droppableId === "doing") {
          moveTask(draggableId, "doing");
        } else if (droppableId === "done") {
          moveTask(draggableId, "done");
        } else {
          moveTask(draggableId, "todo");
        }
      }
    }
  })
);

export default TaskHandlers;
