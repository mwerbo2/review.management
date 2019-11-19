var sql = require('../db/config.js')

let User = (user) => {
    this.user = user.user
}

User.getAllUsers = (result) => {
    sql.query('SELECT * FROM users;', (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
};


User.createUser = (req, result) => {
    const {first_name, last_name, email, password_digest, validated, avatar} = req;    
    sql.query('INSERT INTO users (first_name, last_name, email, password_digest, validated, avatar) VALUES (?, ?, ?, ?, ?, ?)', [first_name, last_name, email, password_digest, validated, avatar], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        }   
    })
};

User.updateEmail = (req, result) => {
    sql.query(`UPDATE users SET email = ? WHERE id = ?`, [req.email, req.id], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        }
    })
}

User.deleteUser = (req, result) => {
    sql.query(`DELETE FROM users WHERE id = ?`, [req], (err, res) => {
        if (err) {
            result(err, null)
        } else {
            return result(null, res)
        }
    })
}
module.exports = User;
