import React, { Fragment } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"

export default function Navigation(props) {
    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Landlord</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="post">Post a Review</Nav.Link>
                    <Nav.Link href="signup">Login / Sign Up</Nav.Link>
                    {props.resultspage && <Fragment><Button>Start a New Search</Button><Button>Post a Review</Button><Button>Login / Signup</Button></Fragment>}
                </Nav>
            </Navbar>
        </Fragment>
    )
}
