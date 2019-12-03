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

Building.createBuilding = (req, result) => {
    const { name, street_number, direction, street_name, street_type, zip, city, state, image } = req;
    sql.query('INSERT INTO buildings (name, street_number, direction, street_name, street_type, zip, city, state, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);', [name, street_number, direction, street_name, street_type, zip, city, state, image], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        };
    });
};