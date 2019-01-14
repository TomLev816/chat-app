import users from "./users";
import { combineReducers } from "redux";

const rootReduce = combineReducers({
  users : users,
});

export default rootReduce;
