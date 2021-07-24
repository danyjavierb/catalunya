import { combineReducers } from "redux";

import authReducer from "./auth.duck";

export default combineReducers({
  auth: authReducer,
});
