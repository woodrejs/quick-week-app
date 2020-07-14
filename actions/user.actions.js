import * as VARIABLES from "../constans/VARIABLES";

export const setUserPassword = (payload) => ({
  type: VARIABLES.SET_USER_PASSWORD,
  payload,
});
export const setUserMail = (payload) => ({
  type: VARIABLES.SET_USER_MAIL,
  payload,
});
export const setUserLogin = () => ({
  type: VARIABLES.SET_USER_LOGIN,
  payload: true,
});
export const setUserLogout = (payload) => ({
  type: VARIABLES.SET_USER_LOGOUT,
  payload: false,
});
export const setUserId = (payload) => ({
  type: VARIABLES.SET_USER_ID,
  payload,
});
