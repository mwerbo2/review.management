import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'

export default function SearchBar() {
    return (
        <Fragment>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Search by zipcode" />
                </Form.Group>
            </Form>
        </Fragment>
    )
}
