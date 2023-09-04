import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer: counterReducer
});
console.log(rootReducer, "reee");
export default rootReducer;
