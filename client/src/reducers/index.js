import { combineReducers } from "redux";
import { user } from "./userReducer";
import { albumReducer } from "./albumReducer";
const rootReducer = combineReducers({
  user,
  albumsList: albumReducer
});

export default rootReducer;
