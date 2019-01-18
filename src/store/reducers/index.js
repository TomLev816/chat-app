import users from "./users";
import userLoggedIn from './userLoggedIn'
import { combineReducers } from "redux";

const rootReduce = combineReducers({
  users : users,
  userLoggedIn: userLoggedIn,
});

export default rootReduce;
