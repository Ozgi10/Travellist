import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "travellist_db",
  password: "Funiak-11",
  port: 5432,
});
