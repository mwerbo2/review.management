const sql = require('../db/config');

let Building = (building) => {
    this.building = building.building
}

Building.getBuildingById = (req, result) => {
    sql.query("SELECT * FROM buildings WHERE id = ?", [req.id], (err, data) => {
        if (err) {
            result(err, data)
        } else {
            result(null, data)
        };
    });
};