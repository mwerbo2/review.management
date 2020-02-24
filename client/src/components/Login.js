import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUp() {
return (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                </Form.Group>
                <Button varialn="primary" type="submit">Sign in</Button>
            </Form>
        </Modal.Body>
    </Modal.Dialog>
    )
}