import { combineReducers } from "redux";

import authReducer from "./auth.duck";
import platosReducer from "./platos.duck";
import cartReducer from "./cart.duck";
import pedidosReducer from "./pedidos.duck";
export default combineReducers({
  auth: authReducer,
  platos: platosReducer,
  cart: cartReducer,
  pedidos: pedidosReducer,
});
