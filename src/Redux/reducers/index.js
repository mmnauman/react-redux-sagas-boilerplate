import { combineReducers } from "redux";
import { productReducer } from "./Products";
const AppReducer = combineReducers({
  productReducer,
});

export default AppReducer;
