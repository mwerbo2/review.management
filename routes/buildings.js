// const { findBuildingById } = require('../controllers/buildings')
module.exports = (app) => {
    app.get('/api/buildings/:id', findBuildingById)
}