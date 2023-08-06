import dotenv from "dotenv";
import express from "express";
import countriesRoutes from "./src/countries/routes.js";
import { pool } from "./db.js";
//import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//app.use(cors());
//app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/countries", async (req, res) => {
  try {
    let query = "SELECT * FROM countries";

    // Check if the 'sort' query parameter exists and is set to 'true'
    if (req.query.sort === "true") {
      query += " ORDER BY name";
    }

    const client = await pool.connect();
    const result = await client.query(query);

    res.json(result.rows);

    client.release();
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});

app.use("/api/countries", countriesRoutes);

mountRoutes(app);
