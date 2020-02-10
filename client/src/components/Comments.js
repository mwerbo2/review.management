import React from 'react'
import Container from 'react-bootstrap'
import Row from 'react-bootstrap'
import Col from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function Comments(props) {
    return (
        <Container>
        <Row>
            <Col>
                <Row>Name: {props.comment.name}</Row>
                <Row>Date: {props.comment.date}</Row>
            </Col>
            <Col>
                {props.comment.body}
            </Col>
            <Col>
                <FontAwesomeIcon icon={faThumbsUp} />{props.comment.reviewThumbsUp}
                <FontAwesomeIcon icon={faThumbsDown} />{props.comment.reviewThumbsDown}
            </Col>
        </Row>
    </Container>
    )
}