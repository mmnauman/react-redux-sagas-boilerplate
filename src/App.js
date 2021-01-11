import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import AppRoutes from "./Routes";
import Loader from "./Component/Common/spinner";
import configureStore from "./Redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const history = createBrowserHistory({ basename: "/" });
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={<Loader />}>
          <AppRoutes />
        </React.Suspense>
      </Router>
    </Provider>
  );
}

export default App;
