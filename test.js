/*import express from "express";
import {
  getCountriesQuery,
  getSortedCountriesQuery
  getCountryByIdQuery,
  /*createCountryQuery,
  deleteCountryQuery,
  updateCountryQuery,
} from "./queries.js";

import {
  getCountries,
  getSortedCountries,
  getCountryById,
  /*createCountry,
  deleteCountry,
  updateCountry,
  
} from "./controllers.js";

//import { pool } from "../../db.js";

const router = express.Router();

/*router.get("/", async (req, res) => {
  try {
    const sortQuery = req.query.sort === "true" ? " ORDER BY name" : "";

    const client = await pool.connect();
    const result = await client.query(`${getCountriesQuery}${sortQuery}`);

    let sortingMessage = "";
    if (req.query.sort === "true") {
      sortingMessage = "Sorted by name";
    }

    res.json(result.rows);

    client.release();
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
 -->
 Here's what each part does:

router.get("/", async (req, res) => { ... }): This is an asynchronous route handler using the async keyword. 
It defines a function that will be executed when a GET request is made to the root path ("/api/countries").

try { ... } catch (error) { ... }: This is a try-catch block. Inside the try block, you place the code that might generate errors. 
If an error occurs, it will be caught in the catch block, allowing you to handle the error gracefully.

const sortQuery = ...: This line checks if the "sort" query parameter is present and equal to "true". 
If it is, it adds the "ORDER BY name" clause to the SQL query; otherwise, it remains an empty string.

const client = await pool.connect();: This line establishes a connection to the database pool asynchronously using the await keyword. 
The await keyword is used with asynchronous functions to pause execution until the asynchronous operation is complete.

const result = await client.query(...);: This line sends the SQL query to the database using the connected client. T
he await keyword is used again to wait for the query to complete before moving on.

res.json(result.rows);: This line sends the JSON response containing the rows retrieved from the database. 
result.rows contains the query result as an array of rows.

client.release();: This releases the database connection back to the pool after using it.

console.error("Error fetching countries:", error);: If an error occurs during the execution of the code within the try block,
it will be caught here. The error message will be logged to the console for debugging.

res.status(500).json({ error: "Internal server error" });: If an error occurs, this line sends a JSON response with a status code of 500 
(Internal Server Error) and an error message.

The async syntax, along with await, makes it easier to write asynchronous code in a more readable and sequential manner, 
similar to synchronous code, while still taking advantage of non-blocking behavior.

router.get("/", (req, res) => {
  getSortedCountries(req, res, getSortedCountriesQuery);
});


router.get("/:id", (req, res) => {
  getCountryById(req, res, getCountryByIdQuery);
});

router.post("/", createCountry);
router.delete("/:id", deleteCountry);
router.put("/:id", updateCountry);


export default router;
*/

/*
export const createCountry = (req, res) => {
const name = `'${req.body.country}'`
  const alpha2code =`'${req.body.alpha2code}'`
  const alpha3code = `'${req.body.alpha3code}'` 
  }

  pool.query('SELECT * FROM countries WHERE name = $1', [name], (error, results) => {
    if (error) throw error;

    if (results.rows.length > 0) {
      return res.status(400).send('Country already exists');
    } else {
      pool.query(createCountryQuery, [name, alpha2code, alpha3code], (error, results) => {
        if (error) throw error;
        res.status(200).json('Country created successfully');
      });
    }
  });
};
*/
