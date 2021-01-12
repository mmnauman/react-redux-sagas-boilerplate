import React from "react";
import { Router } from "react-router-dom";
import { interceptor } from "utils/interceptor";
import configureStore from "../../Redux/store";
import browserHistory from "utils/history";
import { Provider } from "react-redux";
import Loader from "utils/spinner";
import AppRoutes from "../Routes";

const store = configureStore();

export default function App() {
  interceptor();
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <React.Suspense fallback={<Loader />}>
          <AppRoutes />
        </React.Suspense>
      </Router>
    </Provider>
  );
}
