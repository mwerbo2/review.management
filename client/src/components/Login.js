import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';


const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;
    const onSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    } 

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    

return (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => onChange(e)}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" value={password} onChange={(e) => onChange(e)}/>
                </Form.Group>
                <Button varialn="primary" type="submit">Sign in</Button>
            </Form>
        </Modal.Body>
    </Modal.Dialog>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
}

export default connect(null, { login })(Login)