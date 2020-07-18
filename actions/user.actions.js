import {
  SET_USER_PASSWORD,
  SET_USER_MAIL,
  SET_USER_ID,
  SET_USER_LOGGED,
} from "../constans/VARIABLES";

export const setUserPassword = (payload) => ({
  type: SET_USER_PASSWORD,
  payload,
});
export const setUserMail = (payload) => ({
  type: SET_USER_MAIL,
  payload,
});

export const setUserId = (payload) => ({
  type: SET_USER_ID,
  payload,
});
export const setUserLogged = (payload) => ({
  type: SET_USER_LOGGED,
  payload,
});
