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
const updateEmail = (req, res) => {
    try {
        const updateFields = {
            id: req.params.id,
            email: req.body.email
        }
        // TODO: Add in validation
        User.updateEmail(updateFields, (user) => {
            return res.status(201).send(user)
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

// DELETE, /api/users/:id, Delete user
const deleteUser = (req, res) => {
    try {
        User.deleteUser(req.params.id, (user) => {
            return res.status(201).send({"msg": "Successfully deleted user"});
        });
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = { 
    getAllUsers, 
    createUser, 
    updateEmail, 
    deleteUser 
}; 