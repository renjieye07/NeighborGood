import { CREATE_SALE, DELETE_SALE, UPDATE_SALE } from "./saleConstants";

export const createSale = sale => {
  return {
    type: CREATE_SALE,
    payload: {
      sale
    }
  };
};

export const updateSale = sale => {
  return {
    type: UPDATE_SALE,
    payload: {
      sale
    }
  };
};

export const deleteSale = saleId => {
  return {
    type: DELETE_SALE,
    payload: {
      saleId
    }
  };
};
