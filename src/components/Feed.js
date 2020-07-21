import React from 'react'
import Iframe from './Iframe'



export default function Feed(props) {

    return (
        <div className="card-body">
            <h2 className="card-title">Gif:</h2>
            <p>{props.name}</p>
            <Iframe />
            <button type="button" class="btn btn-outline-dark">Like This</button>
        </div>
    )
}
