var mysql = require('mysql')
const env = require('dotenv')
env.config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
})

module.exports= connection;