import users from "./users";
import userLoggedIn from './userLoggedIn'
import rooms from './rooms'
import activeRoom from './activeRoom'
import { combineReducers } from "redux";

const rootReduce = combineReducers({
  users : users,
  userLoggedIn: userLoggedIn,
  rooms: rooms,
  activeRoom: activeRoom
});

export default rootReduce;
