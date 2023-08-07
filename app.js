import dotenv from "dotenv";
import express from "express";
import countriesRoutes from "./src/countries/routes.js";
import { mountRoutes } from "./mount_routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Travellist!");
});

app.use("/api/countries", countriesRoutes);

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});

mountRoutes(app);
