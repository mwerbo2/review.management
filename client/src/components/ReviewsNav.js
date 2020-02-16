import React, {useState} from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function ReviewsNav() {
    const [value, setValue] = useState([1, 3]);

    const handleChange = val => setValue(val);

    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton value={1}>Reviews</ToggleButton>
            <ToggleButton value={2}>Ratings</ToggleButton>
        </ToggleButtonGroup>
    )
}