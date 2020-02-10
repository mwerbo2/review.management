import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image'; 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function ResultsList() {
    const handleClick = (e) => {
        // Update state with target key
    }

    return (
        
        <ListGroup>
            <Container>
            <ListGroup.Item onClick={handleClick}>
                <Row>
                    <Col>
                        <h1 className="building-title">Building Title</h1>
                        <p className="street">6451 N Sheridan Road</p>
                        <p className="city">Chicago, Il 60614</p>
                    </Col>
                    <Col>
                        <h4 className="rating">Rating 1.34</h4>
                        <h4 className="reports">43 reports</h4> 
                    </Col> 
                </Row>
            </ListGroup.Item>
            </Container>
        </ListGroup>
        
    )
}
