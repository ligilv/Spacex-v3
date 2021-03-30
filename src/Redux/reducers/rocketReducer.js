import {
  GET_ROCKETS,
  GET_PAST_ROCKETS,
  GET_UPCOMING_ROCKETS,
  GET_ROCKETS_BY_DATE,
} from "../actions/types";
const initialState = {
  data: [],
};
const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROCKETS:
      return { ...state, data: payload };
      break;
    case GET_PAST_ROCKETS:
      return { ...state, data: payload };
      break;
    case GET_UPCOMING_ROCKETS:
      return { ...state, data: payload };
      break;
    case GET_ROCKETS_BY_DATE:
      return { ...state, data: payload };
    default:
      return state;
      break;
  }
};

export default rocketReducer;
