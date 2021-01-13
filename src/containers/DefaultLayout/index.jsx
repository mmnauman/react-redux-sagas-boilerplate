import React, { Fragment, Suspense } from "react";
import Routes from "../../routes";
import { Route, Switch } from "react-router-dom";
import Loader from "utils/spinner";
import "./index.scss";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const DefaultLayout = (props) => {
  //Get data from reducer state
  // const productReducer = useSelector((state) => state.productReducer);

  return (
    <Fragment>
      <Header />
      <Fragment>
        <div className={"component"}>
          <Suspense fallback={<Loader />}>
            <Switch>
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <route.component {...props} {...props} />
                    )}
                  />
                ) : null;
              })}
            </Switch>
          </Suspense>
        </div>
      </Fragment>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
