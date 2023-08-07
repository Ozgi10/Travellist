import express from "express";
import {
  getCountriesQuery,
  getCountryByIdQuery,
  /*createCountryQuery,
  deleteCountryQuery,
  updateCountryQuery,*/
} from "./queries.js";

import {
  getCountries,
  getCountryById,
  /*createCountry,
  deleteCountry,
  updateCountry,
  */
} from "./controllers.js";

import { pool } from "../../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sortQuery = req.query.sort === "true" ? " ORDER BY name" : "";
  const dataQuery = `${getCountriesQuery}${sortQuery}`;

  getCountries(req, res, dataQuery);
});
/*router.get("/", (req, res) => {
  getCountries(req, res, getCountriesQuery);
});

router.get("/", async (req, res) => {
  try {
    const sortQuery = req.query.sort === "true" ? " ORDER BY name" : "";

    const client = await pool.connect();
    const result = await client.query(`${getCountriesQuery}${sortQuery}`);

    res.json(result.rows);

    client.release();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching countries:" });
  }
});
*/

router.get("/:id", (req, res) => {
  getCountryById(req, res, getCountryByIdQuery);
});

/*router.post("/", createCountry);
router.delete("/:id", deleteCountry);
router.put("/:id", updateCountry);
*/

export default router;
