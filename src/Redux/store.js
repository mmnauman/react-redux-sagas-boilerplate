import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import persistState from "redux-localstorage";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import AppReducer from "./reducers";
import rootSaga from "./sagas";

// Create sagas middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default function configureStore() {
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd) {
    middleware.push(logger);
  }

  const store = createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(...middleware), persistState("auth"))
  );
  // Running sagas
  sagaMiddleware.run(rootSaga);
  return store;
}
