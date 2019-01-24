export const getUsers = (userApiData) => {
  console.log(userApiData)
  return {
    type: "LOAD_USERS_FROM_API",
    payload: userApiData
  }
}

export const getRooms = (roomApiData) => {
  console.log(roomApiData)
  return {
    type: "LOAD_ROOMS_FROM_API",
    payload: roomApiData
  }
}

export const newRoom = (roomApiData) => {
  console.log(roomApiData)
  return {
    type: "CREATE_NEW_ROOM",
    payload: roomApiData
  }
}

export const roomNewMessage = (newMessage) => {
  console.log(newMessage)
  return {
    type: "ADD_NEW_MESSAGE",
    payload: newMessage
  }
}

export const setActiveRoom = (activeRoom) => {
  console.log(activeRoom)
  return {
    type: "SET_ACTIVE_ROOM",
    payload: activeRoom
  }
}

export const addNewUser = (user) => {
  console.log(user);
  return {
    type: "NEW_USER",
    payload: user
  }
}

export const userLoggedInAction = (user) => {
  console.log(user)
  return {
    type: "LOGIN_USER",
    payload: user
  }
}

export const changeUserRoom = (userRoom) => {
  console.log(userRoom)
  return {
    type: "CHANGE_USER_ROOM",
    payload: userRoom
  }
}
