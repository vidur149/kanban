import {
  ADD_NEW_TASK,
  MOVE_TO_DOING,
  MOVE_TO_DONE,
  MOVE_TO_TODO
} from "./types";
const uuidv1 = require("uuid/v1");

const INITIAL_STATE = {
  tasks: {}
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_TASK: {
      let newTasks = Object.assign(
        {
          [uuidv1()]: {
            title: action.payload,
            status: "todo"
          }
        },
        state.tasks
      );
      return { tasks: newTasks };
    }
    case MOVE_TO_DOING: {
      let newTasks = Object.assign({}, state.tasks);
      newTasks[action.payload] = {
        title: newTasks[action.payload].title,
        status: "doing"
      };
      return { tasks: newTasks };
    }
    case MOVE_TO_DONE: {
      let newTasks = Object.assign({}, state.tasks);
      newTasks[action.payload] = {
        title: newTasks[action.payload].title,
        status: "done"
      };
      return { tasks: newTasks };
    }
    case MOVE_TO_TODO: {
      let newTasks = Object.assign({}, state.tasks);
      newTasks[action.payload] = {
        title: newTasks[action.payload].title,
        status: "todo"
      };
      return { tasks: newTasks };
    }
    default:
      return state;
  }
};

export default tasksReducer;
