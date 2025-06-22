// This file is in charge of connecting Node.js to the MySQL database.

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MerkatoCode7*',   
  database: 'nba_dashboard'    
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;