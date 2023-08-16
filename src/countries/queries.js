export const getCountriesQuery = "SELECT * FROM countries";
export const getCountryByIdQuery = "SELECT * FROM countries WHERE id = $1";
export const createCountryQuery =
  "INSERT INTO countries (name, alpha2Code, alpha3Code) VALUES ($1, $2, $3)";
export const deleteCountryQuery = "DELETE FROM countries WHERE id = $1";
export const updateCountryByIdQuery =
  "UPDATE countries SET name = $1, aplha2Code = $2, alpha3Code = $3 WHERE id = $4";
