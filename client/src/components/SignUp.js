import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SignUp() {
return (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name"/>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name"/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                </Form.Group>
                <Button varialn="primary" type="submit">Sign up</Button>
            </Form>
        </Modal.Body>

    </Modal.Dialog>
    )
}

export default connect()(SignUp)