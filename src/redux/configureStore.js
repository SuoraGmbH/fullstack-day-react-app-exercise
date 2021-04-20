import { combineReducers, createStore } from "redux";

import { scoreReducer } from "./scoreReducer";
import { historyReducer } from "./historyReducer";

export const configureStore = () => {
  return createStore(
    combineReducers({
      score: scoreReducer,
      history: historyReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
