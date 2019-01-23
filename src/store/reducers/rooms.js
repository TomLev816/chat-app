const defaultRooms = [];

const rooms = (state = defaultRooms, action) => {
  switch (action.type) {
    case "LOAD_ROOMS_FROM_API":
      return action.payload;
      case "CREATE_NEW_ROOM":
        return [...state, action.payload];
    default:
      return state;
  }
};

export default rooms;
