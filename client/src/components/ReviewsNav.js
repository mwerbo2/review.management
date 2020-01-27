import React from 'react'
import ToggleButtonGroup from 'react-bootstrap';

export default function BuildingViolations() {
    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton value={1}>Reviews</ToggleButton>
            <ToggleButton value={2}>Ratings</ToggleButton>
        </ToggleButtonGroup>
    )
}