import React from 'react'


export default function Feed(props) {

    return (
        <div className="card-body">
            <h2 className="card-title">Gif</h2>
            <p>{props.name}</p>
            <iframe title="gif" src={props.gif}></iframe>
            <button type="button" class="btn btn-outline-dark">Like This</button>
        </div>
    )
}
