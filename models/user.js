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

User.createUser = (req, result) => {
    sql.query('INSERT INTO users (first_name, last_name, email, password_digest, validated, avatar) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.first_name, req.body.lastname, req.body.email, req.body.password_digest, req.body.validated, req.body.avatar], (err, res) => {
        if (err) {
            result(err, null)
        } else {
            return result(null, res)
        }
    })
};

User.updateUser = (req, result) => {
    sql.query('UPDATE users SET first_name = req.body.first_name, last_name = req.body.last_name, email = req.body.email, password_digest = req.body.password_digest, validated = req.body.validated, avatar = req.body.avatar WHERE id = req.params.id', (err, res) => {
        if (err) {
            result(err, null)
        } else {
            return result(null, res)
        }
    })
}

module.exports = User;
