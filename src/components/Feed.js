import React from 'react'
import Button from './Button'
import Fetching from './Fetching'

export default function Feed(props) {

    return (
        <div className="card-body">
            <h2 className="card-title">Gif name:</h2>
            <h5>{props.name}</h5>
            <iframe title="gif" src={props.gif}></iframe>
            <Button />
            <Fetching />
        </div>
    )
}
