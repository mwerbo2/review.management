import React, {Fragment} from 'react'

export default function UnitDescription(props) {
    return (
    <Fragment>
        <h1>{props.title}</h1>
        <p>{props.street}</p>
        <p>{props.state}</p>
        <img src="" />
    </Fragment>        
    )
}
