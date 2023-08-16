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

export const createCountry = (req, res, createQuery, data) => {
  const { ...dataValues } = data;

  pool.query(createQuery, Object.values(dataValues), (error, results) => {
    if (error) throw error;

    res.status(200).send("Country is created!");
  });
};

export const deleteCountryById = (req, res, deleteCountryQuery) => {
  const id = parseInt(req.params.id);

  pool.query(deleteCountryQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("Country was removed");
  });
};

export const updateCountryById = (req, res, createQuery, data, id) => {
  const { ...dataValues } = data;

  pool.query(
    createQuery,
    [...Object.values(dataValues), id],
    (error, results) => {
      if (error) throw error;

      res.status(200).send("Country is successfully updated");
    }
  );
};
