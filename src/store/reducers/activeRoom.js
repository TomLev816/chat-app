const defaultActiveRoom = '';

const activeRoom = (state = defaultActiveRoom, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ROOM":
      return action.payload;
    case "ADD_NEW_MESSAGE":
      return {...state, messages: [...state.messages, action.payload]}
    default:
      return state;
  }
};

export default activeRoom;
