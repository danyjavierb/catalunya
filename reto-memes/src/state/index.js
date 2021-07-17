import { combineReducers } from "redux";
import memes from "./memes.duck";
import misMemes from "./misMemes.duck";

export const combinedReducers = combineReducers({
  memes,
  misMemes,
});
