import { handleActions } from "redux-actions";
import { AuthActionsType } from "../actions";
const initialState = {
  getListLoading: false,
  posts: [],
};

const authReducer = handleActions(
  {
    [AuthActionsType.GET_LIST]: (state, { payload }) => ({
      ...state,
      getListLoading: true,
    }),
    [AuthActionsType.GET_LIST_SUCCESS]: (state, { payload }) => ({
      ...state,
      getListLoading: false,
      posts: payload,
    }),
    [AuthActionsType.GET_LIST_FAILURE]: (state) => ({
      ...state,
      getListLoading: false,
      posts: [],
    }),
  },
  initialState
);

export default authReducer;
