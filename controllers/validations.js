const Validation = require('../models/validation');


const createValidation = (req, res) => {
    try {
        const validationFields = {
            user_id: req.params.id,
            document: req.files.document
        }
        Validation.createValidation(validationFields, (err, validation) => {
            if (err) res.status(400).send(err)
            res.status(200).send(validation)
        })
    } catch (error) {
        res.status(400).send(error)
    };
};

module.exports = {
    createValidation
}
