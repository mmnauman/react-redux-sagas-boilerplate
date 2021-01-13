import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// Pages
const DefaultLayout = React.lazy(() => import("../containers/DefaultLayout"));

const Routes = [
  {
    exact: false,
    path: "/",
    name: "Main",
    component: DefaultLayout,
    authentication: false,
  },
];

class AppRoutes extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Switch>
          {Routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                name={route.name}
                render={(props) => (
                  <route.component {...props} {...this.props} />
                )}
              />
            );
          })}
        </Switch>
      </>
    );
  }
}
export default withRouter(AppRoutes);
