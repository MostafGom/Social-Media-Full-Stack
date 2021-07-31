
export const LoginStart = (userCreds) => ({
  type: "LOGIN_START"
})
export const LoginSucess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user

})
export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error
})
export const Logout = (user) => ({
  type: "LOGOUT",
  payload: user
})


export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
})

export const UNFollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
})