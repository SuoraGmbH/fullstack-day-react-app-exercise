import {combineReducers, compose, createStore} from "redux";

import { scoreReducer } from "./scoreReducer";
import { historyReducer } from "./historyReducer";
import DevTools from "../DevTools";

export const configureStore = () => {
  return createStore(
    combineReducers({
      score: scoreReducer,
      history: historyReducer,
    }),
    compose((window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || DevTools.instrument())
  );
};
