const mysql2 = require('mysql2')

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Pharma',
  password: 'root123@'
})

module.exports = pool.promise()