import { combineReducers } from "redux";

import authReducer from "./auth.duck";
import platosReducer from "./platos.duck";
export default combineReducers({
  auth: authReducer,
  platos: platosReducer,
});
