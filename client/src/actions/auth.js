import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from './types';

// Load user
export const loadUser = () => async dispatch => {
    
}

// Register User
export const register = ({first_name, last_name, email, password_digest}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ first_name, last_name, email, password_digest})

    try {
        const res = await axios.post('/api/users', body, config)
        console.log("RES", res)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.log("ERR actions", err )
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
        
    }
}


