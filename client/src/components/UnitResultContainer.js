import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// TODO extract into style.css
const styles = {
    hr: {
        marginTop: '1rem',
        marginBottom: '1rem',
        border: 0,
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        }
}

export default function UnitResultContainer() {
    return (
        <Fragment>
            <span>{"< "}Back to search results</span>
            <hr style={styles.hr}/>
            <Container>
                <Row>
                    <Col>Apartment Description</Col>
                    <Col>Apartment Ratings</Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </Fragment>
    )
}
