import { combineReducers } from "redux";
import { todos } from "./todosReducer";

export const reducers = combineReducers({
  todos,
});
