import React from 'react'
import Container from 'react-bootstrap'
import Row from 'react-bootstrap'
import Col from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function BuildingViolations() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>Date: {props.reportDate}</Row>
                    <Row>Status: {props.reportStatus}</Row>
                </Col>
                <Col>
                    Description: {props.reportDescription}
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faThumbsUp} />{props.buildingReportThumbsUp}
                    <FontAwesomeIcon icon={faThumbsDown} />{props.buildingReportThumbsDown}
                </Col>
            </Row>
        </Container>
    )
}
