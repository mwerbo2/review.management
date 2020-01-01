import React from 'react'
import SearchBar from './SearchBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SearchResultsContainer() {
    return (
        <Container fluid>
            <Row>
            <Col>Map</Col>
            <Col>List</Col>
            </Row>
        </Container>
    )
}
