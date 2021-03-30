import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import rootreducers from "./reducers/rootReducer";
const store = createStore(
  rootreducers,
  composeWithDevTools(applyMiddleware(Thunk))
);
export default store;
