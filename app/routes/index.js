import V1 from "./v1/index.js";

export const routes = [
  {
    url: "/api/v1/products",
    route: V1.productsRoute,
  },
];

export const addRoutes = (app) => {
  routes.forEach((route) => {
    app.use(route.url, route.route);
  });
};
