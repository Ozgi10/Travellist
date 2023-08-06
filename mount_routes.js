import countriesRoutes from "./src/countries/routes.js";

export const mountRoutes = (app) => {
  app.use("/api/countries", countriesRoutes);
};
