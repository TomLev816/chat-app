const defaultUsers = [];

const users = (state = defaultUsers, action) => {
  switch (action.type) {
    case "LOAD_USERS_FROM_API":
      return action.payload;
      case "NEW_USER":
        return [...state, action.payload];
    default:
      return state;
  }
};

export default users;
