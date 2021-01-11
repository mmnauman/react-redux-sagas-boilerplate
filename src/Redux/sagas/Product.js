import { put, takeEvery, call } from "redux-saga/effects";
import { ApiHelper } from "../../Utils/ApiFetching/ApiHelper";
import {
  ProductActions,
  productListSuccess,
  productListFailed,
} from "../actions";
const baseURL = window?.location?.origin;

const getProductListData = async () => {
  let api = new ApiHelper();
  let result = await api.FetchFromServer(
    `${baseURL}/Products.json`,
    "GET",
    false,
    undefined,
    undefined
  );
  return result;
};

function* requestProductList() {
  try {
    const result = yield call(getProductListData);
    console.log(">>>>>>>>>>>>>>>>>>>Result", result.data);
    if (result.data) {
      yield put(productListSuccess(result.data));
    }
  } catch (error) {
    console.log("Errorrrrr", error);
    yield put(productListFailed);
  }
}

export function* productSagas() {
  yield takeEvery(ProductActions.GET_PRODUCT_LIST, requestProductList);
}
