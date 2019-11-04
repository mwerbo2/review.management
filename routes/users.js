const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users')
module.exports = app => {
    app.get('/api/user', getAllUsers);
    app.post('/api/user', createUser)
    app.put('/api/user/:id', updateUser)
    app.delete('/api/user/:id', deleteUser)
}