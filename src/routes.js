import React from "react";
const HomePage = React.lazy(() => import("./containers/Home/homeContainer"));
const ProductsPage = React.lazy(() => import("./containers/Prducts"));
const Page404 = React.lazy(() => import("./containers/page404"));

const Routes = [
  {
    path: "/",
    exact: true,
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    exact: true,
    name: "Products",
    component: ProductsPage,
  },
  {
    exact: true,
    path: "*",
    name: "Page 404",
    component: Page404,
  },
];

export default Routes;
