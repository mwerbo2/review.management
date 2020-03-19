import React, {useState} from 'react'
import { connect } from 'react-redux'
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';

const SignUp = ({ setAlert, register }) => {
const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
})

const {first_name, last_name, email, password} = formData;

const onChange = e => 
setFormData({...formData, [e.target.name]: e.target.value})

const onSubmit = async e => {
    e.preventDefault();
    register({first_name, last_name, email, password})
}


return (
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="first_name" value={first_name} placeholder="First name" onChange={e => onChange(e)}/>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="last_name" value={last_name} placeholder="Last name" onChange={e => onChange(e)}/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} placeholder="Email" onChange={e => onChange(e)}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} placeholder="password" onChange={e => onChange(e)}/>
                </Form.Group>
                <Button varialn="primary" type="submit">Sign up</Button>
            </Form>
        </Modal.Body>

    </Modal.Dialog>
    )
}

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}

export default connect(
    null,
    {setAlert, register}
)(SignUp)