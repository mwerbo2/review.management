var sql = require('../db/config.js')

let User = (user) => {
    this.user = user.user
}

User.getAllUsers = (result) => {
    sql.query('SELECT * FROM users;', (err, res) => {
        if (err) {
            result(err, null)
        }
        else {
            return result(null, res);
        }
    })
};

module.exports = User;