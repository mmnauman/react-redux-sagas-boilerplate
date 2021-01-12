import { createAction } from "redux-actions";

export const AuthActionsType = {
  GET_LIST: "GET_LIST",
  GET_LIST_SUCCESS: "GET_LIST_SUCCESS",
  GET_LIST_FAILURE: "GET_LIST_FAILURE",
};

export const getList = createAction(AuthActionsType.GET_LIST);
export const getListSuccess = createAction(AuthActionsType.GET_LIST_SUCCESS);
export const getListFailure = createAction(AuthActionsType.GET_LIST_FAILURE);
