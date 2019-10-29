const { getAllUsers, createUser } = require('../controllers/users')
module.exports = app => {
    app.get('/user', getAllUsers);
    app.post('/user', createUser)
}