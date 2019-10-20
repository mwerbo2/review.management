const user = require('../controllers/users')
module.exports = app => {
    app.get('/', getAllUsers);
}