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

export const userLoggedInAction = (user) => {
  console.log(user)
  return {
    type: "LOGIN_USER",
    payload: user
  }
}
