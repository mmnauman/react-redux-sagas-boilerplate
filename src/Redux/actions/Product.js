import { createAction } from "redux-actions";

export const ProductActions = {
  GET_PRODUCT_LIST: "Get product List",
  PRODUCT_LIST_SUCCESS: "Product List Success",
  PRODUCT_LIST_FAILED: "Product List Failed",
  ADD_PRODUCT_TO_CART: "Add product to cart",
  ADD_PRODUCT_TO_CART_SUCCESS: "Add product to cart success",
  ADD_PRODUCT_TO_CART_FAILED: "Add product to cart failed",
};

//Request Product List
export const requestProductList = createAction(ProductActions.GET_PRODUCT_LIST);
export const productListSuccess = createAction(
  ProductActions.PRODUCT_LIST_SUCCESS
);
export const productListFailed = createAction(
  ProductActions.PRODUCT_LIST_FAILED
);

//Reqest to add product in cart
export const requestToAddCart = createAction(
  ProductActions.ADD_PRODUCT_TO_CART
);
export const addCartSuccess = createAction(
  ProductActions.ADD_PRODUCT_TO_CART_SUCCESS
);
export const addCartFailed = createAction(
  ProductActions.ADD_PRODUCT_TO_CART_FAILED
);
