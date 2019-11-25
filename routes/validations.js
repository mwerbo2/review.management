// const { createValidation, getValidationById } = require('../controllers/validations');

module.exports = (app) => {
    app.post('/api/validations/', validation.createValidation);
    app.get('/api/validations/:id', validation.getValidationById)
}