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

const router = express.Router();

router.get("/", (req, res) => {
  getCountries(req, res, getCountriesQuery);
});

router.get("/:id", (req, res) => {
  getCountryById(req, res, getCountryByIdQuery);
});

/*router.post("/", createCountry);
router.delete("/:id", deleteCountry);
router.put("/:id", updateCountry);
*/

export default router;
