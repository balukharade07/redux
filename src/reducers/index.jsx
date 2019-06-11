import { combineReducers } from "redux";
import contcatReducers from "./contcatReducers";
import contcatReducers1 from "./contcatReducers1";

export default combineReducers({
	contact: contcatReducers,
	contact1: contcatReducers1
});
