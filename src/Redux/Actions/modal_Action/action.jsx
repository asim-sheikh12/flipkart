import { OPEN_LOGIN_MODEL } from "./actonType";

export const openModal = (data) => {
  return {
    type: OPEN_LOGIN_MODEL,
    status : data
  };
};