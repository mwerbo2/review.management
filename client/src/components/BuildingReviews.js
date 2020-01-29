import React from 'react'
import Container from 'react-bootstrap'
import Row from 'react-bootstrap'
import Col from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function BuildingReviews() {
    return (
        <Container>
        <Row>
            <Col>
                <Row>{props.isVerified}</Row>
                <Row>Status: {props.reportUsername}</Row>
                <Row>Date: {props.reportDate}</Row>
            </Col>
            <Col>
                <h2>Ratings</h2>
                {props.ratings.cleanliness} Cleanliness <br/>
                {props.ratings.communication} Communication <br/>
                {props.ratings.maintenance} Maintenance <br/>
            </Col>
            <Col>
                Comment: {props.rating.comment}
            </Col>
            <Col>
                <FontAwesomeIcon icon={faThumbsUp} />{props.report.reviewThumbsUp}
                <FontAwesomeIcon icon={faThumbsDown} />{props.report.reviewThumbsDown}
            </Col>
        </Row>
    </Container>
    )
}
