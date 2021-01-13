const {Pool} = require('pg');


const pool = new Pool( {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "masterkey",
  database: "school",
  max: 20,
  connectionTimeoutMillis: 30000,
  idleTimeoutMillis: 10000
});

module.exports = pool;