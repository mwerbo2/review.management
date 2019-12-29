const { getAllUsers, createUser, updateEmail, deleteUser } = require('../controllers/users')
const auth = require('../controllers/auth')
module.exports = app => {
    app.get('/api/users', auth, getAllUsers);
    app.post('/api/users', createUser)
    app.put('/api/users/:id', auth, updateEmail)
    app.delete('/api/users/:id', auth, deleteUser)
}