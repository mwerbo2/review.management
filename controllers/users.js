const User = require('../models/user');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator')

// GET, Private, /api/users, get all users
const getAllUsers = (req, res) => {
    User.getAllUsers((err, users) => {
        if (err) res.send(err);
        res.status(200).send(users)
    })
}

// POST, Private, /api/users, Create new user
const createUser = (req, res) => {
    try {
        const {first_name, last_name, email, password_digest, avatar } = req.body
        // TODO: Add in param validation and sterilization
        bcrypt.genSalt(10, (err, salt) => {
            // Hasing password
            bcrypt.hash(password_digest, salt, (err, hash) => {
                if (err) throw err
            
                User.createUser(req.body, (err, user) =>{
                    if (err) res.status(400).send(err)
                    res.status(201).send(user) 
                })
            })
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

// PUT, Private, /api/users/:id, Update user
const updateUser = async (req, res) => {
    try {
        const {first_name, last_name, email, password_digest, avatar } = req.body
        const user = await User.updateUser(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}

// DELETE, /api/users/:id, Delete user
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