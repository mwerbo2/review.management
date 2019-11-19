const { getAllUsers, createUser, updateEmail, deleteUser } = require('../controllers/users')
module.exports = app => {
    app.get('/api/users', getAllUsers);
    app.post('/api/users', createUser)
    app.put('/api/users/:id', updateEmail)
    app.delete('/api/users/:id', deleteUser)
}