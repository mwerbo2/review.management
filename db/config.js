var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name
});
 
module.exports = connection;