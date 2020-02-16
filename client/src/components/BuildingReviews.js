import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function BuildingReviews(props) {
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
                {props.cleanliness} Cleanliness <br/>
                {props.communication} Communication <br/>
                {props.maintenance} Maintenance <br/>
            </Col>
            <Col>
                Comment: {props.comment}
            </Col>
            <Col>
                <FontAwesomeIcon icon={faThumbsUp} />{props.reviewThumbsUp}
                <FontAwesomeIcon icon={faThumbsDown} />{props.reviewThumbsDown}
            </Col>
        </Row>
    </Container>
    )
}
