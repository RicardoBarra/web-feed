import React from "react";
import "./App.css";
import Title from "./components/Title";
import Structure from "./components/Structure";

function App() {
  return (
    <div className="App">
      <Title content="Gif feed" />
      <Structure header="example 1" name="Piet" />
      <div className="main">
        <div className="popular_posts">a</div>
        <div className="feed">b</div>
        <div className="advertisements">c</div>
      </div>
    </div>
  );
}

export default App;
