// const { findBuildingById, createBuilding } = require('../controllers/buildings')
module.exports = (app) => {
    app.get('/api/buildings/:id', findBuildingById),
    app.post('/api/buildings/', createBuilding)
}