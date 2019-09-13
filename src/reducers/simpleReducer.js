import { SIMPLE_ACTION } from "../constants";

const simpleReducer = (state = {}, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default simpleReducer;
