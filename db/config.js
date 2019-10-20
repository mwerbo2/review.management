var mysql = require('mysql');

var sql = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name
});

sql.connect(err => {
    if (err) throw err;
    console.log("successfully connected to db")
})
 
module.exports = sql;