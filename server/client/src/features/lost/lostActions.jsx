import { CREATE_LOST, DELETE_LOST, UPDATE_LOST } from "./lostConstants";

export const createLost = lost => {
  return {
    type: CREATE_LOST,
    payload: {
      lost
    }
  };
};

export const updateLost = lost => {
  return {
    type: UPDATE_LOST,
    payload: {
      lost
    }
  };
};

export const deleteLost = lostId => {
  return {
    type: DELETE_LOST,
    payload: {
      lostId
    }
  };
};
