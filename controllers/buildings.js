const Building = require('../models/building');


//GET, PRIVATE, /api/buildings/:id, get review by id
const findBuildingById = (req, res) => {
    try {
        const { id } = req.params;
        Building.findBuildingById(id, (building, err) => {
            if (err) res.status(400).send(err)
            res.status(200).send(building);
        })
    } catch (error) {
        res.status(400).send(error)
    };
};

const createBuilding = (req, res) => {
    try {
        Building.createBuilding(req.body, (building, err) => {
            if (err) res.status(400).send(err)
            res.status(200).send(building);
        })
    } catch (error) {
        res.status(400).send(error)
    };
}

module.exports = {
    findBuildingById,
    createBuilding
}