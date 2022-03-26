const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});
pool.connect();
pool.query(`Select * from todo`, (err, res) => {
  if (!err) {
    console.log("Connect Pg-Postgres Success");
  } else {
    console.log(err.message);
  }
  // pool.end();
});
module.exports = pool;
