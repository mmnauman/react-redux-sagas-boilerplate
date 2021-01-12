import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import { productSagas } from "./Product";

export default function* rootSaga() {
  yield all([authSagas(), productSagas()]);
}
