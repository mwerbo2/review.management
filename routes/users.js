const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users')
module.exports = app => {
    app.get('/api/users', getAllUsers);
    app.post('/api/users', createUser)
    app.put('/api/users/:id', updateUser)
    app.delete('/api/users/:id', deleteUser)
}