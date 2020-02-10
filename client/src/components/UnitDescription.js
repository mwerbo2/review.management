import React, {Fragment} from 'react'

export default function UnitDescription(props) {
    return (
    <Fragment>
        <h1>{props.title}</h1>
        <p>{props.street}<br/>{props.city}</p>
        <img style={{height: '350px', width: '350px'}} src={props.buildingImageUrl} />
    </Fragment>        
    )
}
