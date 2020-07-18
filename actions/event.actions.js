import { SET_EVENT } from "../constans/VARIABLES";

export const setEvent = (payload) => ({
  type: SET_EVENT,
  payload,
});
