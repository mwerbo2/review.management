// const { findBuildingById, createBuilding, updateBuilding } = require('../controllers/buildings')
module.exports = (app) => {
    app.get('/api/buildings/:id', findBuildingById),
    app.post('/api/buildings/', createBuilding),
    app.put('/api/buildings/:id', updateBuilding)
}