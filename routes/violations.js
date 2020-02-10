//const { getViolationById } = require('../controllers/violations');

module.exports = (app) => {
    // Fetch API for latest violations
    app.get('/api/violations/', fetchViolations)
    // Get applications for a particular building 
    app.get('/api/violations/:id', getViolationById)
}