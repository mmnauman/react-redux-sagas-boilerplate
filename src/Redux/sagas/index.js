import { all } from "redux-saga/effects";
import { productSagas } from "./Product";

export default function* rootSaga() {
  yield all([productSagas()]);
}
