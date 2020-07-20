import React from "react";

export default function Structure(props) {
  return (
    <div>
      <header>
        <h3>{props.header}</h3>
        <p>{props.name}</p>
      </header>
    </div>
  );
}
