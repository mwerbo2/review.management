import React, { Fragment } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Navigation() {
    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#Home">Landlord</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#Post">Post a Review</Nav.Link>
                    <Nav.Link href="#Register">Login / Sign Up</Nav.Link>
                </Nav>
            </Navbar>
        </Fragment>
    )
}
