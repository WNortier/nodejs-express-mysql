const mysql = require("mysql");
const config = require("../config/db.config.js");
// Create a connection to the database
const connection = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});
// open the MySQL connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });
module.exports = connection;
