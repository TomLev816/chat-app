import users from "./users";
import userLoggedIn from './userLoggedIn'
import rooms from './rooms'
import { combineReducers } from "redux";

const rootReduce = combineReducers({
  users : users,
  userLoggedIn: userLoggedIn,
  rooms: rooms
});

export default rootReduce;
