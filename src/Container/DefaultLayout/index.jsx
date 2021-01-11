import React, { Fragment, Suspense } from "react";
import Loader from "../../Component/Common/spinner";
import DeafaultHeader from "../DefaultHeader";
import Routes from "../../routes";
import { Route, Switch } from "react-router-dom";
import "./index.scss";
import { useSelector } from "react-redux";
const DefaultLayout = (props) => {
  //Get data from reducer state
  const productReducer = useSelector((state) => state.productReducer);

  return (
    <Fragment>
      <DeafaultHeader
        cartCount={
          productReducer.cartProducts && productReducer.cartProducts.length
            ? productReducer.cartProducts.length
            : 0
        }
        productList={
          productReducer.cartProducts && productReducer.cartProducts.length
            ? productReducer.cartProducts
            : []
        }
      />
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
    </Fragment>
  );
};

export default DefaultLayout;
