import React from 'react'
import BuildingViolations from './BuildingViolations';
import BuildingReviews from './BuildingReviews';
import ReviewsNav from './ReviewsNav';


export default function ReviewsContainer() {
    
    // Review and rating filters
    // Review component
    // Comment component
    return (
        <div>
            <ReviewsNav />
            <BuildingViolations />
            <BuildingReviews />
        </div>
    )
}
