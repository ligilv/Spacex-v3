import { combineReducers } from "redux";
import rocketReducer from "./rocketReducer";

const rootReducers = combineReducers({
  rocket: rocketReducer,
});
export default rootReducers;
