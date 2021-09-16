import { ADD_MESSAGE, REMOVE_MESSAGE } from "../actions/messageactions";

const messageReducer = (state = { message: "", bgColor: "" }, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default messageReducer;
