const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users')
module.exports = app => {
    app.get('/user', getAllUsers);
    app.post('/user', createUser)
    app.put('/user/:id', updateUser)
    app.delete('/user/:id', deleteUser)
}