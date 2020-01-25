import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './UnitRatingStyle.css'


function UnitRatings(props) {
    return (
        <div>
            <h1>Reviews, Ratings and Reports</h1>
            <span className="rating-description"><FontAwesomeIcon icon={faThumbsUp} size="3x" />&nbsp; &nbsp;{props.averageRating} Average Rating</span><br/>
            <span className="rating-description">{props.cleanlinessRating} Average Cleanliness Rating</span><br/>
            <span className="rating-description">{props.maintenanceRating} Average Maintenance Rating</span><br/>
            <span className="rating-description">{props.neighborHoodRating} Average Neighborhood Rating</span><br/>
            <span className="rating-description">{props.buildingViolationsTotal} Building Violation Reports</span><br/>
        </div>
    )
}

export default UnitRatings

