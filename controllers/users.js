const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        const user = await User.getAllUsers
        return res.status(201).send(user)
    } catch (err) {
        return res.status(400).send(error)
    }
}

export { getAllUsers }; 