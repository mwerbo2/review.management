const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')

// GET, Private, /api/users/ get user by id
const getUserById = (req, res) => {
    const id = req.user   
    try {
        User.getUserById(id, (err, user) => {
            res.status(200).send(user)
        })
    } catch (error) {
        if(error) throw error;
    }
  
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

                    // Generate token and send in res
                    const payload = {
                        user: {
                            id: user.insertId
                        }
                    };

                    jwt.sign(
                        payload,
                        process.env.jwtSecret,
                        { expiresIn: 36000 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({ token })
                        }
                    )
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
    getUserById,
    createUser, 
    updateEmail, 
    deleteUser 
}; 