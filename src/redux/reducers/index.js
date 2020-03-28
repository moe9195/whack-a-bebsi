import { combineReducers } from "redux";
import board from "./Board";

const rootReducer = combineReducers({
  board: board
});

export default rootReducer;
