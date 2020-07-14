import * as VARIABLES from "../constans/VARIABLES";

export const setEvent = (payload) => ({
  type: VARIABLES.SET_EVENT,
  payload,
});
