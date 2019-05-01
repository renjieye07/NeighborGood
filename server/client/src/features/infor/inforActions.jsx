import { CREATE_INFOR, DELETE_INFOR, UPDATE_INFOR } from "./inforConstants";

export const createInfor = infor => {
  return {
    type: CREATE_INFOR,
    payload: {
      infor
    }
  };
};

export const updateInfor = infor => {
  return {
    type: UPDATE_INFOR,
    payload: {
      infor
    }
  };
};

export const deleteInfor = inforId => {
  return {
    type: DELETE_INFOR,
    payload: {
      inforId
    }
  };
};
