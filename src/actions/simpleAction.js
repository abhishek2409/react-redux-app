import { SIMPLE_ACTION } from "../constants";

export const simpleAction = obj => dispatch => {
  dispatch({
    type: SIMPLE_ACTION,
    payload: { ...obj }
  });
};
