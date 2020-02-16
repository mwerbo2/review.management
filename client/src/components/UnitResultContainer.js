import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UnitDescription from './UnitDescription';
import UnitRatings from './UnitRatings';
import ReviewsContainer from './ReviewsContainer';

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
                    <Col md='6'><UnitDescription title={"Edgewater Place"} street={"4350 N Sheridan Ave,"} city={"Chicago Il, 60614"} /></Col>
                    <Col md='6'><UnitRatings averageRating={"4.1"} /></Col>
                </Row>
            </Container>
            <hr style={styles.hr}/> 
            <Container>
                <Row>
                    <Col><ReviewsContainer/></Col>
                </Row>
            </Container>
        </Fragment>
    )
}
