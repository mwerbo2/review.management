const Violation = require('../models/violation');
const axios = require('axios');

// GET /api/violations/, fetch all violations from open source API
const fetchViolations = async (req, res) => {
    // const url = `CHICAGO_BUILDING_VIOLATIONS_API`
    const violationData = {};
    // Get all building violation data from api
    const data = await axios.get(url); 
    
    // Check for missing values and normalize
    violationData.title = data.hasOwnProperty('title') ? data['title'] : null
    // Match building violation to building model
    violationData.building_id = getBuildingId(data['name'])
    violationData.description = data.hasOwnProperty('description') ? data['description'] : null
    violationData.date_issued = data.hasOwnProperty('date_issued') ? data['date_issued'] : null
    violationData.status = data.hasOwnProperty('status') ? data['status'] : null
    violationData.resolution = data.hasOwnProperty('resolution') ? data['resolution'] : null
    
    try {
        // Insert violation data into database
        Violation.createViolation(violationData, (violation, err) => {
            if (err) res.status(400).send(err);
            res.status(200).send(violation);
        })  
    } catch (error) {
        res.status(400).send(error)
    };
};