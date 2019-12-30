import React from 'react';
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'


const Home = props => {
    return (
        <Container fluid>
            <Navigation />
            <Jumbotron>
                <Container>
                    <h1>Find reviews on your next apartment.</h1>
                    <p>Reviews, ratings, and peace of mind</p>
                </Container>
            </Jumbotron>
        </Container>
    );
};


export default Home;