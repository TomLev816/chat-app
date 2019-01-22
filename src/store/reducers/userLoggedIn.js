const defaultUserLoggedIn = 'tom';

const userLoggedIn = (state = defaultUserLoggedIn, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "CHANGE_USER_ROOM":
      return {...state, room_id: action.payload};
    default:
      return state;
  }
};

export default userLoggedIn;
