const User = require('../models/user');
const bcrypt = require('bcrypt');
// Private route to get all user data
const getAllUsers = async (req, res) => {
    try {
        const user = await User.getAllUsers()
        return res.status(201).send(user)
    } catch (err) {
        return res.status(400).send(err)
    }
}
// Private route to post new user
const createUser = async (req, res) => {
    try {
        const {first_name, last_name, email, password_digest, avatar } = req.body
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password_digest, salt, (err, hash) => {
            if (err) throw err
            // Hashed password stored in db
            const user = User.createUser(first_name, last_name, email, hash, avatar)
            return res.status(201).send(user)
            })
        }) 
    } catch (error) {
        return res.status(400).send(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const {first_name, last_name, email, password_digest, avatar } = req.body
        const user = await User.updateUser(req.params.id, first_name, last_name, email, password_digest, avatar)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.deleteUser(req.params.id);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = { 
    getAllUsers, 
    createUser, 
    updateUser, 
    deleteUser 
}; 