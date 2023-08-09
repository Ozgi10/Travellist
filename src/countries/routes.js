//import { pool } from "../../db.js";
import express from "express";
import {
  getCountries,
  getCountryById,
  createCountry,
  deleteCountryById,
  //updateCountry,//
} from "./controllers.js";
import {
  getCountriesQuery,
  getCountryByIdQuery,
  createCountryQuery,
  deleteCountryQuery,
  //updateCountryQuery,//
} from "./queries.js";

/*import { body, check } from "express-validator";
 */

const router = express.Router();

router.get("/", (req, res) => {
  const sortQuery = req.query.sort === "true" ? " ORDER BY name" : "";
  const dataQuery = `${getCountriesQuery}${sortQuery}`;

  getCountries(req, res, dataQuery);
});

router.get("/:id", (req, res) => {
  getCountryById(req, res, getCountryByIdQuery);
});

router.post("/", (req, res) => {
  const data = {
    name: req.body.name,
    alpha2Code: req.body.alpha2Code,
    alpha3Code: req.body.alpha3Code,
  };

  createCountry(req, res, createCountryQuery, data);
});

router.delete("/:id", (req, res) => {
  deleteCountryById(req, res, deleteCountryQuery);
});

/*
router.put("/:id", updateCountry);
*/

export default router;
