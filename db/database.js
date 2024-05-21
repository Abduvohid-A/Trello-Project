import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
    user : process.env.DB_USERNAME,
    host : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.connect( (err) => {
    if (err) console.log(err.message);
    else console.log(`Postgres connected with Server`);
});

export default pool;

