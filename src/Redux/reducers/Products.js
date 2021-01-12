import { handleActions } from "redux-actions";
import { ProductActions } from "../actions";

const initiateState = {
  data: [],
  isLoadingProduct: false,
  isAddingCart: false,
  cartProducts: [],
};
export const productReducer = handleActions(
  {
    [ProductActions.GET_PRODUCT_LIST]: (state, { payload }) => ({
      ...state,
      isLoadingProduct: true,
    }),
    [ProductActions.PRODUCT_LIST_SUCCESS]: (state, { payload }) => ({
      ...state,
      data: payload,
      isLoadingProduct: false,
    }),
    [ProductActions.PRODUCT_LIST_FAILED]: (state) => ({
      ...state,
      data: [],
      isLoadingProduct: false,
    }),
    [ProductActions.ADD_PRODUCT_TO_CART]: (state, { payload }) => ({
      ...state,
      cartProducts: payload,
      isAddingCart: true,
    }),
    [ProductActions.ADD_PRODUCT_TO_CART_SUCCESS]: (state, { payload }) => ({
      ...state,
      isAddingCart: false,
    }),
    [ProductActions.ADD_PRODUCT_TO_CART_FAILED]: (state) => ({
      ...state,
      isAddingCart: false,
    }),
  },
  initiateState
);
