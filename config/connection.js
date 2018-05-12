//MySQL connection set up 
var mysql = require("mysql");

var connection = mysql.createConnection({
    port:8080,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect()