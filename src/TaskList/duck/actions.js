import {
  ADD_NEW_TASK,
  MOVE_TO_DOING,
  MOVE_TO_DONE,
  MOVE_TO_TODO
} from "./types";

export const addTask = title => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_TASK,
      payload: title
    });
  };
};

export const moveTask = (id, action) => {
  return dispatch => {
    if (action === "doing") {
      dispatch({
        type: MOVE_TO_DOING,
        payload: id
      });
    } else if (action === "done") {
      dispatch({
        type: MOVE_TO_DONE,
        payload: id
      });
    } else {
      dispatch({
        type: MOVE_TO_TODO,
        payload: id
      });
    }
  };
};
