import { pool } from "../../db.js";

export const getCountries = (req, res, dataQuery) => {
  pool.query(dataQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getCountryById = (req, res, dataQueryById) => {
  const id = parseInt(req.params.id);

  pool.query(dataQueryById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

/*export const createCountry = (req, res) => {
  const { name, aplha2Code, aplha3Code } = req.body;

  // add Country to db

  pool.query(
    `SELECT * FROM countries WHERE aplha3Code='${aplha3Code}'`,
    (error, result) => {
      if (error) {
        throw error;
      }
      if (result.rows.length > 0) {
        res.status(400).send({ error: "aplha3Code already exists" });
      } else {
        pool.query(
          createCountryQuery,
          [name, aplha2Code, aplha3Code],
          (error, results) => {
            if (error) throw error;

            res.status(201).send("Country was successfully created");
          }
        );
      }
    }
  );
};

export const deleteCountry = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(deleteCountryQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("Country was removed");
  });
};

export const updateCountry = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, aplha2Code, aplha3Code } = req.body;

  pool.query(
    updateCountryQuery,
    [name, aplha2Code, aplha3Code, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("Country was successfully updated");
    }
  );
};
*/
