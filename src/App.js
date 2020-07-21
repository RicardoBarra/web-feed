import React from "react";
import "./App.css";
import Title from "./components/Title";
import Structure from './components/Structure'
import Fetching from "./components/Fetching"



function App() {
  return (
    <div className="App">
      <Title content="Welcome to the gifland!" />
      <Structure />
      <Fetching />
    </div>
  );
}

export default App;
