import React from 'react'
import SearchBar from './SearchBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapView from './MapView';
import ResultsList from './ResultsList';

export default function SearchResultsContainer() {
    return (
        <Container fluid>
            <Row>
            <Col><MapView /></Col>
            <Col><ResultsList /></Col>
            </Row>
        </Container>
    )
}
