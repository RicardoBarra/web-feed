import React from "react";

export default function Title(props) {
  return (
    <div>
      <h1 className="card text-center">{props.content}</h1>
    </div>
  );
}
