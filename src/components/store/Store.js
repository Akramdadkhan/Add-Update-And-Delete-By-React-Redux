import { createStore, combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ tasksReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
