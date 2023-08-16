import express from "express";
import {
  getCountries,
  getCountryById,
  createCountry,
  deleteCountryById,
  updateCountryById,
} from "./controllers.js";
import {
  getCountriesQuery,
  getCountryByIdQuery,
  createCountryQuery,
  deleteCountryQuery,
  updateCountryByIdQuery,
} from "./queries.js";

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

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const data = {
    name: req.body.name,
    alpha2code: req.body.alpha2code,
    alpha3code: req.body.alpha3code,
  };

  updateCountryById(req, res, updateCountryByIdQuery, data, id);
});

export default router;
