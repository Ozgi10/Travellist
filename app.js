import dotenv from "dotenv";
import express from "express";
import countriesRoutes from "./src/countries/routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
//app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*app.get("/api/countries", (req, res, next) => {
  const sort = req.query.sort;
  console.log(sort);
  if (sort) {
    const sortedCountries = countries.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    res.render("countries", { countries: sortedCountries });
  } else {
    res.render("countries", { countries });
  }
});

/*app.get('/', (req, res) => {
    res.send('Homepage');
});
*/
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});

app.use("/api/countries", countriesRoutes);
